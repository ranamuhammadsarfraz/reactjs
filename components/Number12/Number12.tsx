"use client"
import Number12_Style from "../jsStyle/Number12_Style"
import dataComponent from "../types/Number12Type"
import Link from "next/link"
import { useState, useEffect, FormEvent } from "react"
import Loader from "../Loader/loader"

export default function Number12(): JSX.Element {
    const [alert, setALert] = useState<string>(dataComponent.alert_1)
    const [aqi, setAqi] = useState<number>()
    const [city, setCity] = useState<string>("")
    const [inputValue, setInputValue] = useState<string>("")
    const [loader_content, setLoaderContent] = useState<boolean>(true)

    async function getData() {
        await fetch("/api/pollution-checker", {
            headers: {
                method: "GET"
            }
        }).then((response) => response.json()).then((response) => {
            setAqi(response.data.overall_aqi)
            setCity(response.city.toUpperCase())
            setInputValue("")
            setLoaderContent(false)
        })
    };

    async function postData(e: FormEvent) {
        e.preventDefault()
        setLoaderContent(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ city: inputValue })
        };
        await fetch("/api/pollution-checker", requestOptions).then((response) => response.json()).then((response) => {
            if (!response.data.overall_aqi) {
                setALert(dataComponent.alert_2)
                setLoaderContent(false)
                setTimeout(() => {
                    setALert(dataComponent.alert_1)
                }, 3000)
                return 0;
            }
            setAqi(response.data.overall_aqi)
            setCity(response.city.toUpperCase())
            setLoaderContent(false)
        })
    };

    useEffect(() => {
        getData()
    }, [])
    return (
        <section style={{ backgroundColor: `${aqi > 100 ? "#c0392b" : "blue"}` }}>
            {loader_content ? <Loader /> : <main style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                height: "100vh",
                color: "white",
                gap: "70px",
                padding: "22px"
            }}>
                <h1 style={Number12_Style.h1Style}>{dataComponent.h1}</h1>
                <div><span style={Number12_Style.aqiStyleSpan1}>{dataComponent.span_1}</span> <span style={Number12_Style.aqiStyleSpan2}>{aqi}</span></div>
                <div style={Number12_Style.cityStyle}>City: {city}</div>
                <form onSubmit={postData} style={Number12_Style.formStyle}>
                    <input onChange={(c) => setInputValue(c.target.value)} style={Number12_Style.inputStyle} type={dataComponent.type} required placeholder={dataComponent.placeholder} />
                    <button style={Number12_Style.btnStyle}>{dataComponent.btn}</button>
                </form>
                <p>{alert}</p>
                <p style={{
                    width: "60%",
                    margin: "auto",
                    textAlign: "center"
                }}>{dataComponent.aqi_desc}</p>
                <Link href={dataComponent.developer_url}>{dataComponent.developer_name}</Link>
            </main>}
        </section>
    )
};
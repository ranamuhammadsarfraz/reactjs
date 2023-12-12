"use client"
import React from 'react'
import style from "./Number11.module.css"
import { useState, useEffect } from 'react'
import Loader from "../Loader/loader"
import Link from 'next/link'
const admin_address: [string, string] = ["https://rmsencode.com", "Developed by R.M.Sarfraz"]

export default function Number11() {
    const [name, setName] = useState<string>("")
    const [population, setPopulation] = useState<number>()
    const [country, setCountry] = useState<string>("")
    const [inputValue, setInputValue] = useState<string>("")
    const [alert, setAlert] = useState<string>("")
    const [loader_content, setLoaderContent] = useState<boolean>(true)
    async function getData() {
        await fetch("/api/city-population", {
            headers: {
                method: "GET"
            }
        }).then((res) => res.json()).then((res) => {
            setName(res[0].name)
            setPopulation(res[0].population)
            setCountry(res[0].country)
            setLoaderContent(false)
        })
    }
    async function postData(e: any) {
        e.preventDefault()
        setLoaderContent(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ city: inputValue })
        };
        await fetch("/api/city-population", requestOptions
        ).then((res) => res.json()).then((res) => {
            if (res.length == 0) {
                setLoaderContent(false)
                setAlert("Check spelling or city data not available.")
                return 0;
            }
            setName(res[0].name)
            setPopulation(res[0].population)
            setCountry(res[0].country)
            setLoaderContent(false)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (<>
        {loader_content ? <Loader /> : <main id={style.main}>
            <h1>{name}</h1>
            <h2>Population</h2>
            <h3>{population}</h3>
            <h2>Country</h2>
            <h3>{country == "PK" ? "Pakistan" : country}</h3>
            <form onSubmit={postData}>
                <input onChange={(c) => setInputValue(c.target.value)} type="text" required placeholder='Search City *' />
                <button>Search</button>
            </form>
            <p>{alert}</p>
            <Link href={admin_address[0]}>{admin_address[1]}</Link>
        </ main>}
    </>
    )
}

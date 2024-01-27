"use client"
import styles from "./Number16.module.scss"
import { useState, useEffect } from "react";
import n16 from "../types/Number16"
import Link from "next/link";

export default function Number16() {
    const [input, setInput] = useState<string>(""),
        [sectionB, setSectionB] = useState<number>(0),
        //
        [name, setName] = useState(""),
        [constellation, setConstellation] = useState(""),
        [right_ascension, setRight_ascension] = useState(""),
        [declination, setDeclination] = useState(""),
        [apparent_magnitude, setApparent_magnitude] = useState(""),
        [absolute_magnitude, setAbsolute_magnitude] = useState(""),
        [distance_light_year, setDistance_light_year] = useState(""),
        [spectral_class, setSpectral_class] = useState(""),
        [alert, setAlert] = useState(""),
        //
        myArr = [
            {
                "0": {
                    h1: "Star",
                    paragraph: "This tool can help you to find information related to Stars."
                },
                "1": async () => {
                    try {
                        await fetch("/api/stars-information", {
                            headers: {
                                method: "GET"
                            }
                        }).then((response) => response.json()).then((response) => {
                            setName(response[0].name)
                            setConstellation(response[0].constellation)
                            setRight_ascension(response[0].right_ascension)
                            setDeclination(response[0].declination)
                            setApparent_magnitude(response[0].apparent_magnitude)
                            setAbsolute_magnitude(response[0].absolute_magnitude)
                            setDistance_light_year(response[0].distance_light_year)
                            setSpectral_class(response[0].spectral_class)
                            setSectionB(2)
                            setAlert("")
                        })
                    } catch (err) {
                        console.log(err)
                        setAlert("Not found.")
                        setSectionB(1)
                    }
                },
                "2": async (e: any) => {
                    e.preventDefault()
                    setSectionB(0)
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ star: input.toLowerCase() })
                    };
                    try {
                        await fetch("/api/stars-information", requestOptions).then((response) => response.json()).then((response) => {
                            if (response.length == 0) {
                                setAlert("Not found.")
                                setSectionB(1)
                                return 0
                            }

                            setName(response[0].name)
                            setConstellation(response[0].constellation)
                            setRight_ascension(response[0].right_ascension)
                            setDeclination(response[0].declination)
                            setApparent_magnitude(response[0].apparent_magnitude)
                            setAbsolute_magnitude(response[0].absolute_magnitude)
                            setDistance_light_year(response[0].distance_light_year)
                            setSpectral_class(response[0].spectral_class)
                            setSectionB(2)
                            setAlert("")
                        })
                    } catch (err) {
                        console.log(err)
                        setAlert("Not found.")
                        setSectionB(1)
                    }
                },
            }
        ]

    useEffect(() => {
        myArr[0]["1"]()
    }, [])

    return (
        <>
            <main id={styles.number_16}>
                <Link target="_blank" href="https://rmsencode.com">Web page is developed by RMSENCODE</Link>
                <span>Malicious activity is prohibited. Data is controlled via external API. It is not owned/controlled by RMSENCODE.</span>
                <h1>{myArr[0]["0"].h1}</h1>
                <p> {myArr[0]["0"].paragraph}</p>
                <form>
                    <input onChange={(c) => setInput(c.target.value)} required placeholder="Name *" type="text" />
                    <button onClick={myArr[0]["2"]}>Search</button>
                </form>
                <div>
                    {sectionB == 0 ? <Loader /> : sectionB == 1 ? "" : <section>
                        <p>Name: {name}</p>
                        <p>Constellation: {constellation}</p>
                        <p>Right Ascension: {right_ascension}</p>
                        <p>Declination: {declination}</p>
                        <p>Apparent Magnitude: {apparent_magnitude}</p>
                        <p>Absolute Magnitude: {absolute_magnitude}</p>
                        <p>Distance Light Year: {distance_light_year}</p>
                        <p>Spectral Class: {spectral_class}</p>
                    </section>}
                </div>
                <p style={{ color: "red" }}>{alert}</p>
            </main>
        </>
    )
}

function Loader() {
    return (
        <div id={styles.loader}>
            <section></section>
        </div>
    )
}
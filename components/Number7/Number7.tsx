"use client"
import React from 'react'
import styles from "./Number7.module.css"
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Number7() {
    const [dataTemp, setDataTemp] = useState(""),
        [city, setCity] = useState("Lahore"),
        [alert, setAlert] = useState(""),
        [inputValue, setInputValue] = useState("")
    async function getData() {
        await fetch('https://api.api-ninjas.com/v1/weather?city=' + city, {
            headers: {
                'X-Api-Key': 'pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3'
            }
        }).then((response) => response.json()).then(response => {
            if (response.error) {
                setAlert("City not found!")
                return
            }
            else {
                setDataTemp(response.temp)
            }
        })
    }
    async function postData(e: any) {
        e.preventDefault()
        setCity(inputValue)
        await fetch('https://api.api-ninjas.com/v1/weather?city=' + city, {
            headers: {
                'X-Api-Key': 'pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3'
            }
        }).then((response) => response.json()).then(response => {
            if (response.error) {
                setCity("Lahore")
                setAlert("City not found, showing default city.")
                ///
                fetch('https://api.api-ninjas.com/v1/weather?city=' + city, {
                    headers: {
                        'X-Api-Key': 'pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3'
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.error) {
                        setAlert("City not found, showing default city.")
                        return
                    }
                    else {
                        setDataTemp(response.temp)
                    }
                })
                ///
                return 0;
            }
            setDataTemp(response.temp)
            setAlert("")
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <main id={styles.main}>
            <h1>Temperature</h1>
            <div id={styles.temp}>
                <span>{dataTemp}</span> <span style={{ display: `${dataTemp ? "block" : "none"}` }}>&deg;C</span>
            </div>
            <p>{dataTemp && city.toUpperCase()}</p>
            <form onSubmit={postData}>
                <input onChange={(c) => setInputValue(c.target.value)} placeholder="Enter city" type="text" required />
                <button>search</button>
            </form>
            <p>{alert}</p>
            <Link href="https://rmsencode.com">Developed by R.M.Sarfraz</Link>
        </main>
    )
}

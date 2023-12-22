"use client"
import React from 'react'
import style from "./Number10.module.css"
import { useState } from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'BMI Calculator',
    description: '',
    robots: "no-follow,no-index"
}

export default function Number10() {
    const [kgorlbs, setKgOrLbs] = useState<boolean>(true),
        [result, setResult] = useState<any>(),
        [weight, setWeight] = useState<any>(""),
        [height, setHeight] = useState<any>(""),
        bmi_description: string = "BMI less then 18.5 lay in underweight category. BMI 18.5 to 24.9 lay in Healthy Category. BMI 25.0 to 29.9 lay in overweight category. CDC data concludes it."

    function myFunction(e: string) {
        if (e == "kg") {
            setKgOrLbs(true)
        }
        else if (e == "lbs") {
            setKgOrLbs(false)
        }
        else if (e == "calculate_in_kg") {
            setResult(Math.round(weight / (height * height)))
        }
        else if (e == "calculate_in_lbs") {
            let res = weight / (height * height)
            res = 703 * res;
            setResult(Math.round(res))
        }
    }
    return (
        <main id={style.main}>
            <h1>BMI Calculate</h1>
            <div id={style.kg_lbs_div}>
                <button onClick={() => myFunction("kg")} style={{ backgroundColor: `${kgorlbs ? "white" : "black"}`, color: `${kgorlbs ? "black" : "white"}` }}>kg</button>
                <button onClick={() => myFunction("lbs")} style={{ backgroundColor: `${kgorlbs ? "black" : "white"}`, color: `${kgorlbs ? "white" : "black"}` }}>lbs</button>
            </div>
            <div id={style.input_div}>
                <input onChange={(c) => setWeight(c.target.value)} placeholder={kgorlbs ? "Enter weight in kg *" : "Enter body weight in lbs *"} type="number" required />
                <input onChange={(c) => setHeight(c.target.value)} placeholder={kgorlbs ? "Enter height in meter *" : "Enter height inches *"} type="number" required />
                <div>{kgorlbs ? <button onClick={() => myFunction("calculate_in_kg")}>Calculate</button> :
                    <button onClick={() => myFunction("calculate_in_lbs")}>Calculate</button>}
                </div>
                <p>{result && "BMI is " + result}</p>
            </div>
            <div id={style.bmi_desc}>{bmi_description}</div>
            <Link href="https://rmsencode.com">Developed by R.M.Sarfraz</Link>
        </main>
    )
}

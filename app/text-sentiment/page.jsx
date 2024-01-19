"use client"

import { useState } from "react";
import styles from "./text-sentiment.module.css"
import Link from "next/link";
export default function Page() {
    const [result, setResult] = useState(""),
        [conclusion, setConclusion] = useState(""),
        [load, setLoad] = useState(true)

    async function myFunction(e) {
        e.preventDefault();
        setLoad(false)
        setConclusion("")
        const text = result,
            jh = 'https://api.api-ninjas.com/v1/sentiment?text=' + text

        let data;
        await fetch(jh, {
            headers: {
                'X-Api-Key': "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"
            }
        }).then((res) => res.json()).then((res) => {
            data = res

            const { sentiment
            } = data

            if (!sentiment) {
                setConclusion("Type error")
                setLoad(true)
                return 0;
            }
            setConclusion(sentiment)
            setLoad(true)
        }).catch((err) => {
            console.log(err)
            setLoad(true)
            setConclusion("Type or Internet error")
        })

    }

    return (
        <main id={styles.main_file}>
            <h1>Text Sentiment Checker</h1>
            <p>This tool may help if given text word has positive or negative impact.</p>
            <form onSubmit={myFunction}>
                <textarea onChange={(c) => setResult(c.target.value)} required placeholder="Your Text" />
                {load ? <button>Know it!</button> : <p style={{ padding: '6px' }}>loading</p>}

            </form>
            <div><span>{conclusion && "Sentiment: "}</span><span style={{ fontWeight: 'bolder' }}>{conclusion}</span></div>
            <Link href="https://rmsencode.com">Developed by RMSENCODE</Link>
        </main>
    )
}
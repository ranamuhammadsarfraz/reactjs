"use client"
import styles from "./Number21.module.scss"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"
import dataArr from "../../components/file/data"
import { FiLoader } from "react-icons/fi";

function Number21() {
    const [text1, setText1] = useState<string>(""),
        [text1Length, setText1length] = useState("Add words in first section"),
        [text2, setText2] = useState<string>(""),
        [text2Length, setText2length] = useState("Add words in second section"),
        [result, setResult] = useState<string | number>(""),
        [load, setLoad] = useState<boolean>(false)

    async function compareMethod(event: any) {
        event.preventDefault()
        try {
            setLoad(true)
            const dataIt = await axios({
                method: 'POST',
                url: dataArr.api_url + '/v1/textsimilarity',
                headers: { 'X-Api-Key': atob(dataArr.api_key) },
                data: JSON.stringify({ "text_1": text1, "text_2": text2 })
            });

            if (!dataIt.data.similarity) {
                setResult("Process failed")
                setLoad(false)
            }
            else if (dataIt.data.similarity == "1") {
                setResult("100% similar")
                setLoad(false)
            }
            else if (dataIt.data.similarity != "1") {
                setResult(dataIt.data.similarity.toFixed(1) + "% similar")
                setLoad(false)
            }
        } catch (error) {
            setResult("Process failed")
            setLoad(false)
        }
    }
    useEffect(() => {
        if (text1.length == 0) return setText1length("Add words in first section")
        setText1length(text1.split(" ").length.toString() + " words in First Section")
    }, [text1])
    useEffect(() => {
        if (text2.length == 0) return setText2length("Add words in second section")
        setText2length(text2.split(" ").length.toString() + " words in First Section")
    }, [text2])
    return (
        <main id={styles.main}>
            <h1>Text Similarity WebTool</h1>
            <p style={{ backgroundColor: "silver", width: "max-content" }}>Maximum words 5000</p>
            <p>{text1Length}</p>
            <p>{text2Length}</p>
            <form onSubmit={compareMethod}>
                <textarea maxLength={5000} disabled={load} value={text1} onChange={(turn) => setText1(turn.target.value)} required placeholder="First Section *" />
                <textarea maxLength={5000} disabled={load} value={text2} onChange={(turn) => setText2(turn.target.value)} required placeholder="Second Section *" />
                <button disabled={load}>Compare</button>
            </form>
            <main>{!load ? result : <FiLoader />}</main>
            <span>
                <div>API (Application programming Interface) is provided by third party.</div>
                <Link href={atob(dataArr.developer)}>{dataArr.by}</Link>
            </span>
        </main>
    )
}

export default Number21
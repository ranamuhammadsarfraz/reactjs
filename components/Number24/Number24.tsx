"use client"
import Link from "next/link"
import { FormEvent, useState } from "react"
import axios from "axios"
import dataArr from "../../components/file/data"

function Number24() {
    const [inputValue, setInputValue] = useState<string>(),
        [result, setResult] = useState<any>({}),
        [mainBool, setMainBool] = useState<boolean>(false),
        [errorIt, setErrorIt] = useState<string>("")

    async function myMethod(e: FormEvent) {
        e.preventDefault()
        setMainBool(true)
        try {
            const dataIt = await axios({
                method: 'GET',
                url: dataArr.api_url + '/v1/validatephone?number=' + inputValue.toLowerCase(),
                headers: { 'X-Api-Key': atob(dataArr.api_key) }
            });
            if (!dataIt.data.country) {
                setErrorIt("Process failed!")
                setResult("")
                return 0;
            }
            setResult({
                is_valid: `<strong>${dataIt.data.is_valid ? "Legal" : "InValid"}</strong>`,
                country: "<span>Country: " + `<strong>${dataIt.data.country}</strong>` + "</span>",
                i_format: "<span>International format: " + `<strong>${dataIt.data.format_international}</strong>` + "</span>",
                l_format: "<span>National format: " + `<strong>${dataIt.data.format_national}</strong>` + "</span>",
                c_code: "<span>Country code is " + `<strong>${dataIt.data.country_code}</strong>` + "</span>"
            })
            setMainBool(false)
            setErrorIt("")
        } catch (error) {
            setErrorIt("Process failed!")
            setResult("")
            setMainBool(false)
        }
    }
    return (
        <main className="w-full flex flex-col justify-center items-left bg-purple-500 text-gray-50 h-screen" >
            <h1 className="p-3 text-3xl">Phone Number Validator</h1>
            <form onSubmit={myMethod} className="p-3">
                <input disabled={mainBool} value={inputValue || ''} onChange={(turn) => setInputValue(turn.target.value)} className="p-3 text-gray-900 w-48" type="text" required placeholder="i.e: +12*********" />
                <button disabled={mainBool} className="p-3 bg-indigo-600">{mainBool ? "Wait" : "Validate"}</button>
            </form>
            <div>{errorIt}</div>
            <section>
                <section className="p-3">
                    <div dangerouslySetInnerHTML={{ __html: result.is_valid }} />
                    <div dangerouslySetInnerHTML={{ __html: result.country }} />
                    <div dangerouslySetInnerHTML={{ __html: result.i_format }} />
                    <div dangerouslySetInnerHTML={{ __html: result.l_format }} />
                    <div dangerouslySetInnerHTML={{ __html: result.c_code }} />
                </section>
                <hr />
                <section className="p-3">
                    <code >
                        <p>Write in International format (+12*********)</p>
                        <Link href={atob(dataArr.developer)}>Contributer is <strong>{atob(dataArr.developer).slice(8)}</strong></Link>
                        <p>All rights reserved</p>
                        <p>Data is controlled by third party API (Application programming interface).</p>
                    </code>
                </section>
            </section>
        </main>
    )
}

export default Number24



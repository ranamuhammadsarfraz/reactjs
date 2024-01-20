"use client"
import { useState } from "react"
import Link from "next/link"

export default function Number14() {
    const [showResultContainer, setShowResultContainer] = useState(false),
        [copyDiv, setCopyDiv] = useState("copy"),
        [inputValue, setInputValue] = useState(""),
        [emoji, setEmoji] = useState(""),
        [btnBool, setBtnBool] = useState(true),
        [errDiv, setErrorDiv] = useState(true)

    async function myFunction(e) {
        e.preventDefault()
        setBtnBool(false)
        setErrorDiv(true)
        const jh = 'https://api.api-ninjas.com/v1/emoji?name=' + inputValue
        let data;
        await fetch(jh, {
            headers: {
                'X-Api-Key': "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"
            }
        }).then((res) => res.json()).then((res) => {
            data = res
            setEmoji(data[0].character)
            setShowResultContainer(true)
            setBtnBool(true)
        }).catch((err) => {
            setShowResultContainer(false)
            setErrorDiv(false)
            setBtnBool(true)
        })
    }

    function copyIt() {
        setCopyDiv("copied")
        window.navigator.clipboard.writeText(emoji)
        setTimeout(() => {
            setCopyDiv("copy")
        }, 1000)
    }

    return (
        <main className="w-full h-screen bg-green-900 text-white flex flex-col justify-center items-center gap-9 transition-all ">
            <h1 className="text-5xl">Emoji Generator</h1>
            <form onSubmit={myFunction}>
                <input className="px-1 text-green-950 outline-none" placeholder="Emoji Name (example: smile) *" required onChange={(c) => setInputValue(c.target.value)} />
                {btnBool ? <button className="bg-green-600 px-8">Get</button> : <button className="bg-black px-8">Loading...</button>}
            </form>
            <div>
                {showResultContainer && <div className="flex gap-3">
                    <span>{emoji}</span>
                    <span><button onClick={copyIt} className="p-3 bg-white text-black">{copyDiv}</button></span>
                </div>}
                {!errDiv && <div>Emoji not found.</div>}
            </div>
            <Link href="https://rmsencode.com">Developed by R.M.Sarfraz</Link>
        </main>
    )
};
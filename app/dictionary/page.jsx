"use client"
import Link from 'next/link'
import { useState } from 'react'
import styles from "./page.module.scss"

export default function Page() {
    const [inputValue, setInputValue] = useState(""),
        [myBool, setMyBool] = useState(false),
        [myContent, setMyContent] = useState([])

    async function myFunction(fEvent) {
        fEvent.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ word: inputValue.toLowerCase() })
        };

        try {
            setMyBool(true)
            await fetch("/api/dictionary", requestOptions).then((response) => response.json()).then((response) => {
                if (response.definition.length === 0) {
                    setMyBool(false)
                    setMyContent({ definition: "Definition not found!" })
                    return;
                }
                setMyContent(response)
                setMyBool(false)
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <main id={styles.main} className='flex min-w-full bg-blue-900 text-gray-300 justify-center gap-9 items-center flex-col'>
            <h1 className='text-6xl'>Dictionary</h1>
            <form onSubmit={myFunction} className='grid gap-3'>
                <input disabled={myBool} onChange={(c) => setInputValue(c.target.value)} placeholder='Type Word *' className='p-2 text-gray-800' type="text" required />
                <button disabled={myBool} className='bg-indigo-400 p-2'>Dictionary</button>
            </form>
            <p>
                {myBool ? <div>.</div> : <span>{myContent.definition}</span>}
            </p>
            <Link className='text-xs' href="https://rmsencode.com">Developed by R.M.Sarfraz</Link>
            <section className='hidden'>API is by api-ninjas.com</section>
        </main>
    )
}

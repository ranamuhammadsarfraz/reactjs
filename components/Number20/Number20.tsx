'use client'

import styles from "./Number20.module.scss"
import { useState, useEffect } from "react"
import Link from "next/link"

const Number20 = () => {
    const [result, setResult] = useState<string>(''),
        [query, setQuery] = useState<string>("")

    useEffect(() => {
        if (query.length == 0) return setResult("")
        setResult(`<p>${query.split(" ").length.toString()}  words only!</p>`)
    }, [query])

    return (
        <main id={styles.main}>
            <h1>Word Counter</h1>
            <section>
                <p dangerouslySetInnerHTML={{ __html: result }} />
            </section>
            <form>
                <textarea value={query} onChange={(c) => setQuery(c.target.value)} required placeholder='Provide value *' />
            </form>
            <Link href="https://rmsencode.com/rmsencode">Developed by Rana Muhammad Sarfraz</Link>
            <p>{new Date().getFullYear()} All rights reserved</p>
        </main>
    )
}

export default Number20
"use client"
import Link from "next/link"
import styles from "./Number4.module.css"
import { useEffect, useState } from "react"
import { HeadProvider, Title, Meta } from 'react-head';

export default function Number4() {
    const [alert_, setAlert_] = useState(false)
    useEffect(() => {
        setTimeout(() => setAlert_(true), 2000)
        setTimeout(() => setAlert_(false), 8000)
    }, [])

    return (
        <main id={styles.main}>
            <HeadProvider>
                <Title>Aviation</Title>
            </HeadProvider>
            <div id={styles.main_first}>
                <h1>Hyer &reg;</h1>
                <div id={styles.main_first_btn_div}>
                    <div id={styles.main_first_btn_div_links}>
                        <Link href="#">Solution</Link>
                        <Link href="#">About us</Link>
                        <Link href="#">Contact</Link>
                        <div id={styles.ab_}>
                            <div>A</div>
                            <div>B</div>
                        </div>
                    </div>
                    <p id={styles.main_first_btn_div_paragraph}>Personalised Aviation</p>
                </div>
            </div>
            <div id={styles.main_second}>
                <p>{alert_ ? <Link href="https://rmsencode.com/about">Developed by R.M.S, Design copied online.</Link> : "More flexibillity, freedom and choice!"}</p>
                <div id={styles.main_second_btn_div}>
                    <button>Book an Aircraft</button>
                    <button>Book a shared Flight</button>
                </div>
            </div>
        </main>
    )
};
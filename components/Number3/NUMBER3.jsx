import React from 'react'
import styles from "./NUMBER3.module.css"
import Link from 'next/link'

export default function Number_3() {
    return (
        <div id={styles.main}>
            <div id={styles.main_eight}>
                <main style={{ background: "#007dac" }}></main>
                <div id={styles.main_seven}>
                    <main style={{ background: "#ace5ee" }}></main>
                    <div id={styles.main_six}>
                        <main style={{ background: "#fae5bf" }}></main>
                        <div id={styles.main_five}>
                            <main style={{ background: "#e1e1e2" }} ></main>
                            <div id={styles.main_four}>
                                <main style={{ background: "#ad6242" }}></main>
                                <div id={styles.main_three}>
                                    <main style={{ background: "#34A56F" }} ></main>
                                    <div id={styles.main_two}>
                                        <main style={{ background: "#FFC649" }}></main>
                                        <div id={styles.main_one}>
                                            <span id={styles.mars} style={{ background: "#B7B8B9" }}></span>
                                            <section>
                                                <span>.</span>
                                                <span>.</span>
                                            </section>
                                            <br />
                                            <hr />
                                        </div>
                                        <br />
                                        <hr />
                                    </div>
                                    <br />
                                    <hr />
                                </div>
                                <br />
                                <hr />
                            </div>
                            <br />
                            <hr />
                        </div>
                        <br />
                        <hr />
                    </div>
                    <br />
                    <hr />
                </div>
                <br />
                <hr />
            </div>
            <h1>Solar System Model (Imaginary Sketch Coded by <Link href="https://rmsencode.com/about">R.M.S</Link>)</h1>
        </div >
    )
}

import styles from "./NUMBER2.module.css"
import React from 'react'
import Image from "next/image"
import { AiOutlineUpload } from 'react-icons/ai';
import Link from "next/link";

export default function Number_2() {
    const arrayLine = [
        {
            0: "",
            1: "Basic",
            2: "29",
            3: [
                { 0: "✅", 1: "720p Video Rendering" },
                { 0: "✅", 1: "2GB Cloud Storage" },
                { 0: "✅", 1: "Basic Video Templates" },
            ],
            4: "Get Started",
            5: { background: "black", width: "100%", borderRadius: "3px", border: "none", color: "white", position: "relative", top: "6px", padding: "3px" }
        },
        {
            0: "Popular",
            1: "Pro",
            2: "59",
            3: [
                { 0: "✅", 1: "1080p Video Rendering" },
                { 0: "✅", 1: "10GB Cloud Storage" },
                { 0: "✅", 1: "Premium Video Templates" },
                { 0: "✅", 1: "Collaboration Tools" },
            ],
            4: "Get Started",
            5: { background: "linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)", width: "100%", borderRadius: "3px", border: "none", color: "white", padding: "3px" }
        },
        {
            0: "",
            1: "Enterprise",
            2: "99",
            3: [
                { 0: "✅", 1: "4K Video Rendering" },
                { 0: "✅", 1: "Unlimited Cloud Storage" },
                { 0: "✅", 1: "Custom Video Templates" },
                { 0: "✅", 1: "Advanced Collaboration Tools" },
                { 0: "✅", 1: "Dedicated Support" },
            ],
            4: "Get Started",
            5: { background: "black", width: "100%", borderRadius: "3px", border: "none", color: "white", padding: "3px" }
        }
    ]
    return (
        <>
            <main id={styles.main}>
                <nav>
                    <div id={styles.left_title}>
                        <span id={styles.left_title_first_span}>
                            <span>{"/"}</span>
                            <span>{"|"}</span>
                        </span>
                        <span id={styles.left_title_second_span}>
                            I
                        </span>
                    </div>
                    <div id={styles.center_paragraph}>A sleek, minimalistic pricing page for a SaaS</div>
                    <div id={styles.right_div}>
                        <button>Private Network</button>
                        <div>
                            <section></section>
                            <section></section>
                        </div>
                    </div>
                </nav>
                <section id={styles.second_block}>
                    <span>
                        <Image style={{ borderRadius: "50%", height: "30px" }} width={31} height={51} src="/gallery/ydt.jpg" />
                        <div id={styles.message}>
                            <span id={styles.message_line}></span>
                            <span>
                                Great, things are hot, like it?
                            </span>
                        </div>
                        <p>about 16 hours</p>
                    </span>

                    <span>
                        <button>New +</button>
                        <button style={{ display: "flex", alignItems: "center", gap: "4px" }}>Share  <AiOutlineUpload /></button>
                        <select name="" id="">
                            <option value="">Code</option>
                            <option value="">Program</option>
                            <option value="">Editor</option>
                        </select>
                    </span>
                </section>
                <section id={styles.third_block}>
                    <div id={styles.third_block_first_div}>
                        <div id={styles.third_block_first_div_inner_div}>
                            {arrayLine.map((d, i) => {
                                return (
                                    <>
                                        <div key={i} className={styles.third_block_first_div_inner_div_component}>
                                            <button className={styles.popular_div}>{d["0"]}</button>
                                            <h2>{d["1"]}</h2>
                                            <div>
                                                <span style={{ fontWeight: "bold" }}>${d["2"]} </span>
                                                <span>/ month</span>
                                            </div>
                                            <ul>
                                                {d["3"].map((d, i) => {
                                                    return <li key={i}>
                                                        <span>
                                                            {d["0"]}
                                                        </span>
                                                        <span className={styles.para_span}> {d["1"]}</span>
                                                    </li>
                                                })}
                                            </ul>
                                            <button style={d["5"]}>{d["4"]}</button>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>

                    <div id={styles.third_block_second_div}>
                        <div id={styles.arr} style={{ color: "white" }}>{"^"}</div>
                        <div className={styles.third_block_second_div_first_div} style={{ opacity: ".1" }}>
                        </div>
                        <div className={styles.third_block_second_div_first_div} style={{ opacity: ".3" }}></div>
                        <div className={styles.third_block_second_div_first_div} style={{ opacity: ".7" }}></div>
                        <div className={styles.third_block_second_div_first_div} style={{ opacity: "1" }}></div>
                    </div>
                </section>
                <footer>
                    <ul>
                        <li>
                            <Link href="#">FAQ</Link>
                        </li>
                        <li>
                            <Link href="#">AI Policy</Link>
                        </li>
                        <li>
                            <Link href="#">Privacy</Link>
                        </li>
                    </ul>
                </footer>
                <div style={{ display: "none" }}>Developed by R.M.S</div>
            </main >
        </>
    )
}
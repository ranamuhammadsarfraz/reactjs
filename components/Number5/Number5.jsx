"use client"
import React, { useState, useEffect } from 'react'
import styles from "./Number4.module.css"

export default function Number5() {
    return (
        <>
            <main id={styles.main}>
                <section>
                    <div id={styles.big_white_circle}></div>
                    <div id={styles.circle}>
                        <div className={styles.inside_circle_1}></div>

                        <div style={{
                            position: "relative", top: "90px", left: "-27px"
                        }} className={styles.inside_circle}></div>

                        <div style={{
                            position: "relative", top: "215px", left: "41px"
                        }} className={styles.inside_circle}></div>

                        <div style={{
                            position: "relative", top: "194px", left: "235px"
                        }} className={styles.inside_circle}></div>

                        <div style={{ position: "relative", top: "20px", left: "390px" }} className={styles.inside_circle}></div>

                        <div style={{ position: "relative", top: "-250px", left: "399px" }} className={styles.inside_circle}></div>

                        <div style={{ position: "relative", top: "-440px", left: "270px" }} className={styles.inside_circle}></div>

                    </div>
                </section>
            </main >
        </>
    )
}

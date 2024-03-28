import React from 'react'
import styles from "./FourthComponent.module.scss"
import dataArray from "../data"
import Image from 'next/image'

export default function FourthComponent() {
    return (
        <div className={styles.main}>
            <div>
                <p>Happy Day, Happy Time</p>
            </div>
            <section>
                {dataArray[1].map((response, index) => {
                    return (
                        <main key={index}>
                            <div>
                                <Image src={response["0"]} height={55} width={55} alt="" />
                            </div>
                            <div>
                                <p>{response["1"]}</p>
                            </div>
                            <div>
                                <button>{response["2"]}</button>
                            </div>
                        </main>
                    )
                })}
            </section>
        </div>
    )
}

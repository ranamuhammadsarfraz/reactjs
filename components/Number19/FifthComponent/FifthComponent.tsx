import React from 'react'
import dataArray from "../data"
import styles from "./FifthComponent.module.scss"

export default function FifthComponent() {
    return (
        <main className={styles.main}>
            {dataArray[2].map((response, index: number) => {
                return (
                    <div style={{ backgroundImage: 'url(' + response["0"] + ')' }} key={index}></div>
                )
            })}
        </main>
    )
}

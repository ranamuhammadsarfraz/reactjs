import React from 'react'
import dataArray from "../data"
import styles from "./ThirdComponent.module.scss"

export default function ThirdComponent() {

    return (
        <div id={styles.main}>
            {dataArray[0].map((response, index) => {
                return (
                    <section key={index}>
                        <p>{response["1"]}</p>
                        <p>{response["2"].slice(0, 122)}</p>
                    </section>
                )
            })}
        </div>
    )
}

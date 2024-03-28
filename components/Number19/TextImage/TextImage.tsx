import React from 'react'
import Image from 'next/image'
import styles from "./TextImage.module.scss"

export default function TextImage(props) {
    return (
        <main className={styles.main}>
            <div>
                <section>{props["0"]}</section>
                <p>{props["2"]}</p>
                <button>{props["3"]}</button>
            </div>
            <div>
                <Image src={props["4"]} alt="" height={101} width={101} />
            </div>
        </main>
    )
}

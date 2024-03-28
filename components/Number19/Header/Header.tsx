import React from 'react'
import styles from "./Header.module.scss"

export default function Header() {
    const paragraph: string = " WE ARE CREATIVES"
    return (
        <header className={styles.header}>
            <section>
                <p>
                    {paragraph}
                </p>
            </section>
        </header>
    )
}

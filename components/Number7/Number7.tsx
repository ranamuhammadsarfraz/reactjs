import React from 'react'
import styles from "./Number7.module.css"

export default function Number7() {
    return (
        <main id={styles.main}>
            <h1>Temperature</h1>
            <div id={styles.temp}>
                11 &deg;C
            </div>
            <p>Lahore</p>
            <form action="">
                <input placeholder="Enter city" type="text" required />
                <button>search</button>
            </form>
            <p>City not found!</p>
        </main>
    )
}

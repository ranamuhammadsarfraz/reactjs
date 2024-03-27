"use client"
import styles from "./Number17.module.scss"
import Link from "next/link";
import menuArray from "./menu-array"
import Image from "next/image";

export default function Number17() {
    return (
        <>
            <main className={styles.main}>
                <section>
                    <div>
                        <Image onContextMenu={(e) => e.preventDefault()} src={menuArray[0].img} height={100} width={190} alt="" />
                    </div>
                    <div>
                        <h1>{menuArray[0].person}</h1>
                    </div>
                    <h2>
                        {menuArray[0].profession}
                    </h2>
                    <h3>
                        {menuArray[0].short_intro}
                    </h3>
                    <main>
                        {menuArray[1].map((response, index: number) => {
                            return (

                                <Link key={index} href={response.link}>
                                    <button>{response.title}</button>
                                </Link>
                            )
                        })}
                    </main>
                    <code>
                        <Link href="https://rmsencode.com">&copy; Developed by RMSENCODE</Link>
                    </code>
                </section>
            </main>
        </>
    )
}
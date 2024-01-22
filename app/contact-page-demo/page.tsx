"use client"
import { FormEvent, useState } from "react"
import styles from "../../styles/contact-page-demo.module.scss"

export default function Page() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [textArea, setTextArea] =
        useState<string>("")
    const [indication, setIndication] = useState<string>("")

    const tA: [string, [{ p: string, t: string, ss: any }, { p: string, t: string, ss: any }], { p: string, t: string, ss: any }] = ["Contact",
        [
            {
                p: "Name",
                t: "text",
                ss: setName
            },
            {
                p: "Email",
                t: "email",
                ss: setEmail
            }
        ],
        { p: "Message", t: "", ss: setTextArea }
    ];

    async function myContact(e: FormEvent) {
        e.preventDefault()
        console.log({ name, email, textArea })
        setIndication("Success!")
    }

    return (
        <>
            <form onSubmit={myContact} className={styles.form}>
                <h1>{tA[0]}</h1>
                {tA[1].map((data, index) => {
                    return (
                        <input onChange={(c) => data.ss(c.target.value)} key={index} required placeholder={data.p} type={data.t} />
                    )
                })}
                <textarea onChange={(c) => tA[2].ss(c.target.value)} required placeholder={tA[2].p} />
                <button>{tA[0]}</button>
                <p>{indication}</p>
                <span>It is a Dummy Contact Form.</span>
            </form>
        </>
    )
}
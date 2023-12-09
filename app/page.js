"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "./index.module.css"

const pL = [
  {
    title: "Two Horn Horse",
    url: "/front-end-just/number-1"
  },
  {
    title: "Price Table",
    url: "/front-end-just/number-2"
  },
  {
    title: "Aviation",
    url: "/front-end-just/number-4"
  },
  {
    title: "Rotating Circle",
    url: "/front-end-just/number-5"
  },
  {
    title: "Clerk Price Plan",
    url: "/front-end-just/number-6"
  },
  {
    title: "Check Temperature",
    url: "/front-end-just/number-7"
  },
]

export default function Page() {
  return (
    <>
      <main id={styles.main}>
        <div id={styles.inner_div}>
          <h1>NextJs Projects</h1>
          <section id={styles.inner_section}>
            {pL.map((data, index) => {
              return (
                <Link key={index} href={data.url}>{data.title}</Link>
              )
            })}
          </section>
        </div>
      </main>
    </>
  )
}
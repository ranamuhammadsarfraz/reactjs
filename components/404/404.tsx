"use client"
import React from 'react'
import styles from "./404.module.css"
import { HeadProvider, Title, Meta } from 'react-head';

export default function Custom404() {
    interface dC_t {
        title: number,
        desc: string,
        h1: string,
        status: string
    }
    const dataCenter: dC_t = {
        title: 404,
        desc: "It is 404 page, nothing else, no data that is valuable, present here.",
        h1: "Nothing Found!",
        status: "Status Code 404"
    }
    return (
        <div id={styles.main}>
            <HeadProvider>
                <Title>{dataCenter.title}</Title>
                <Meta name={dataCenter.status} content={dataCenter.desc} />
            </HeadProvider>
            <h1>{dataCenter.h1}</h1>
            <p>{dataCenter.status}</p>
        </div>
    )
}

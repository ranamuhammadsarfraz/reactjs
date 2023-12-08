"use client"
import React from 'react'
import styles from "./404.module.css"
import { HeadProvider, Title, Meta } from 'react-head';

export default function Custom404() {
    return (
        <div id={styles.main}>
            <HeadProvider>
                <Title>404</Title>
                <Meta name="example" content="whatever" />
            </HeadProvider>
            <h1>Nothing Found!</h1>
            <p>Status Code 404</p>
        </div>
    )
}

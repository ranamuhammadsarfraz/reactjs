"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from "./slider.module.scss";

function Page() {
    const sectRef = useRef(),
        span_1 = useRef<any>(),
        span_2 = useRef<any>(),
        span_3 = useRef<any>();

    function sectionMethod() {
        span_1.current.style.flex = "0";
        span_2.current.style.flex = "0";
        span_3.current.style.flex = "0";
        // alert("secy")
    }

    function spanMethod(event_: any, event: string) {
        if (event == "1") {
            span_1.current.style.flex = "1";
            span_2.current.style.flex = "0";
            span_3.current.style.flex = "0";
        } else if (event == "2") {
            span_1.current.style.flex = "0";
            span_2.current.style.flex = "1";
            span_3.current.style.flex = "0";
        }
        else if (event == "3") {
            span_1.current.style.flex = "0";
            span_2.current.style.flex = "0";
            span_3.current.style.flex = "1";
        }
        event_.stopPropagation()
    }
    return (
        <>
            <main onClick={sectionMethod} id={styles.main_slider}>
                <p>Click each pipe to increase width. Click gray area for normal width.</p>
                <section ref={sectRef}>
                    <span onClick={(e) => spanMethod(e, "1")} ref={span_1}></span>
                    <span onClick={(e) => spanMethod(e, "2")} ref={span_2}></span>
                    <span onClick={(e) => spanMethod(e, "3")} ref={span_3}></span>
                </section>
            </main>
        </>
    )
}

export default Page;
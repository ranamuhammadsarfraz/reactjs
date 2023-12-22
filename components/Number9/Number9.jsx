"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Number9.module.css";

export const metadata = {
    title: 'Card App',
    description: '',
    robots: "no-follow,no-index"
}

const MainCSS3 = {
    padding: "22px",
    width: "100%",
    height: "100vh",
    background: "#000000",
    position: "fixed",
    top: 0,
    zIndex: "20000",
};
const MainCode = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
};

function CardsApp() {
    const [st1, setSt1] = useState(true);
    const [st2, setSt2] = useState(true);
    const [st3, setSt3] = useState(true);
    const [st4, setSt4] = useState(true);
    const [st5, setSt5] = useState(true);

    function drama1() {
        setSt1(!st1);
        setSt2(true);
        setSt3(true);
        setSt4(true);
        setSt5(!st5);
    }
    function drama2() {
        setSt1(true);
        setSt2(!st2);
        setSt3(true);
        setSt4(true);
        setSt5(!st5);
    }
    function drama3() {
        setSt1(true);
        setSt2(true);
        setSt3(!st3);
        setSt4(true);
        setSt5(!st5);
    }
    function drama4() {
        setSt1(true);
        setSt2(true);
        setSt3(true);
        setSt4(!st4);
        setSt5(!st5);
    }
    function drama5() {
        setSt1(true);
        setSt2(true);
        setSt3(true);
        setSt4(true);
        setSt5(!st5);
    }

    function dhvb() {
        setTimeout(() => setLoaderBoolean(false), 3000);
    }
    useEffect(dhvb, []);
    return (
        <>
            <div style={MainCSS3}>
                <h1
                    style={{
                        fontFamily: "Roboto",
                        color: "white",
                        padding: "3px",
                        fontSize: "17pt",
                        position: "absolute",
                        bottom: "3px",
                        right: "3px",
                    }}
                >
                    Cards-APP
                </h1>
                <div className={styles.mainContentDiv} style={MainCode}>
                    <div
                        onClick={drama1}
                        className={st1 ? styles.firstDiv : styles.firstDivv}
                    ></div>
                    <div
                        onClick={drama2}
                        className={
                            st2 ? styles.secondDiv : styles.secondDivv
                        }
                    ></div>
                    <div
                        onClick={drama3}
                        className={st3 ? styles.thirdDiv : styles.thirdDivv}
                    ></div>
                    <div
                        onClick={drama4}
                        className={
                            st4 ? styles.fourthDiv : styles.fourthDivv
                        }
                    ></div>
                    <div
                        onClick={drama5}
                        className={st5 ? styles.fifthDiv : styles.fifthDivv}
                    ></div>
                </div>
            </div>

        </>
    );
}

export default CardsApp;

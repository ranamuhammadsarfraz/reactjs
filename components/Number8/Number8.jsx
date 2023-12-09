"use client"
import styles from "./quiz.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const qU = [
    {
        id: 0,
        q: "How many Moon Earth have?",
        opt1: [3],
        opt2: [0],
        opt3: [1, true],
    },
    {
        id: 1,
        q: "Our Earth is mostly?",
        opt1: ["Sand"],
        opt2: ["Both", true],
        opt3: ["Water"],
    },
    {
        id: 2,
        q: "Yogurt is made of?",
        opt1: ["Milk", true],
        opt2: ["Chocolate"],
        opt3: ["Coconut"],
    },
    {
        id: 3,
        q: "Male and Female is same?",
        opt1: ["True"],
        opt2: ["False", true],
        opt3: ["No comment"],
    },
    {
        id: 4,
        q: "Computer programming language are mostly based on?",
        opt1: ["C", true],
        opt2: ["Python"],
        opt3: ["Javascript"],
    },
];

export default function Quiz() {
    const [iArr, setIArr] = useState(qU[0]);
    const tick1 = useRef();
    const tick2 = useRef();
    const tick3 = useRef();
    const [fAlert1, setFAlert1] = useState(true);
    const [fAlert2, setFAlert2] = useState(true);
    const [fAlert3, setFAlert3] = useState(true);
    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const [result3, setResult3] = useState("");
    const [toggle, setToogle] = useState(true);
    const router = useRouter();
    const [total, setTotal] = useState(0);

    function myFunction() {
        if (iArr.id == 0) {
            setIArr(qU[1]);
        } else if (iArr.id == 1) {
            setIArr(qU[2]);
        } else if (iArr.id == 2) {
            setIArr(qU[3]);
        } else if (iArr.id == 3) {
            setIArr(qU[4]);
        } else if (iArr.id == 4) {
            // setIArr(qU[0]);
            setToogle(false);
        } else {
            console.log("wrong call!");
        }
    }
    function cA(r) {
        if (r == "1") {
            if (iArr.opt1.length == 2) {
                setFAlert1(false);
                setResult1("true");
                setTotal(total + 1);
                setTimeout(() => {
                    setResult1("");
                    myFunction();
                }, 1000);
            } else {
                setFAlert1(false);
                setResult1("false");
                setTotal(total);
                setTimeout(() => {
                    setResult1("");
                    myFunction();
                }, 1000);
            }
        } else if (r == "2") {
            if (iArr.opt2.length == 2) {
                setFAlert2(false);
                setResult2("true");
                setTotal(total + 1);
                setTimeout(() => {
                    setResult2("");
                    myFunction();
                }, 1000);
            } else {
                setFAlert2(false);
                setResult2("false");
                setTotal(total);
                setTimeout(() => {
                    setResult2("");
                    myFunction();
                }, 1000);
            }
        } else if (r == "3") {
            if (iArr.opt3.length == 2) {
                setFAlert3(false);
                setTotal(total + 1);
                setResult3("true");
                setTimeout(() => {
                    setResult3("");
                    myFunction();
                }, 1000);
            } else {
                setFAlert3(false);
                setResult3("false");
                setTotal(total);
                setTimeout(() => {
                    setResult3("");
                    myFunction();
                }, 1000);
            }
        }
    }
    return (
        <>
            <main className={styles.main}>
                <div className={styles.component}>
                    {toggle ? (
                        <div>
                            <h1>Quiz #{iArr.id + 1}</h1>
                            <div className={styles.quiz}>
                                <p>{iArr.q}</p>
                                <div onClick={() => cA("1")} className={styles.qE}>
                                    <p>{iArr.opt1[0]}</p>
                                    <p
                                        ref={tick1}
                                        style={{ display: `${fAlert1 ? "none" : "block"}` }}
                                        className={styles.tickmark}
                                    >
                                        {result1}
                                    </p>
                                </div>
                                <div onClick={() => cA("2")} className={styles.qE}>
                                    <p>{iArr.opt2[0]}</p>
                                    <p
                                        ref={tick2}
                                        style={{ display: `${fAlert2 ? "none" : "block"}` }}
                                        className={styles.tickmark}
                                    >
                                        {result2}
                                    </p>
                                </div>
                                <div onClick={() => cA("3")} className={styles.qE}>
                                    <p>{iArr.opt3[0]} </p>
                                    <p
                                        style={{ display: `${fAlert3 ? "none" : "block"}` }}
                                        ref={tick3}
                                        className={styles.tickmark}
                                    >
                                        {result3}
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <h2>Quiz Over</h2>
                            <h3>Result: {total} out of 5</h3>
                            <br />
                            <button onClick={() => window.location.reload()}>Do it again!</button>
                        </div>
                    )}
                    <Link
                        style={{ color: "green" }}
                        href="https://pixabay.com/illustrations/cat-space-astronaut-rocket-maze-3695213/"
                    >
                        Photo by belozerovkids - PixaBay
                    </Link>
                    <hr />
                </div>
            </main>
        </>
    );
}

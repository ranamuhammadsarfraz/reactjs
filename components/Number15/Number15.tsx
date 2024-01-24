"use client"
import { useState } from "react"
import styles from "./Number15.module.css"
import { CiUser } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { GiIceCreamScoop } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { MdOutlineSettingsAccessibility } from "react-icons/md";
import Link from "next/link";

export default function Number15() {
    return (
        <>
            <main id={styles.main_div}>
                <FirstDiv />
                <SecondDiv />
            </main>
        </>
    )
}

function FirstDiv() {
    const [firstB, setFirstB] = useState<boolean>(true)
    const [sB, setSB] = useState<boolean>(true)
    const [tB, setTB] = useState<boolean>(true)
    const [fB, setFB] = useState<boolean>(true)
    const [fifthB, setFifthB] = useState<boolean>(true)

    type myArr_ = {
        "0": any,
        "1": string,
        "2": { bg: any, color: any, transition: string }
        "3": string
    }

    const myArr: [myArr_, myArr_, myArr_, myArr_, myArr_] = [
        {
            "0": <CiUser />,
            "1": "Face Primer",
            "2": { bg: `${firstB ? "#FFFFFF" : "#000000"}`, color: `${firstB ? "#000000" : "#FFFFFF"}`, transition: "2s" },
            "3": "a"
        },
        {
            "0": <FaEye />,
            "1": "Foundation",
            "2": { bg: `${sB ? "#000000" : "#FFFFFF"}`, color: `${sB ? "#FFFFFF" : "#000000"}`, transition: "2s" },
            "3": "b"
        },
        {
            "0": <GiIceCreamScoop />,
            "1": "GI Cream",
            "2": { bg: `${tB ? "#000000" : "#FFFFFF"}`, color: `${tB ? "#FFFFFF" : "#000000"}`, transition: "2s" },
            "3": "c"
        },
        {
            "0": <CiSettings />,
            "1": "Setting",
            "2": { bg: `${fB ? "#000000" : "#FFFFFF"}`, color: `${fB ? "#FFFFFF" : "#000000"}`, transition: "2s" },
            "3": "d"
        },
        {
            "0": <MdOutlineSettingsAccessibility />,
            "1": "Accessiblity",
            "2": { bg: `${fifthB ? "#000000" : "#FFFFFF"}`, color: `${fifthB ? "#FFFFFF" : "#000000"}`, transition: "2s" },
            "3": "e"
        },
    ]

    function myToogle(c: any) {
        if (c == myArr[0]["3"]) {
            setFirstB(true)
            setSB(true)
            setTB(true)
            setFB(true)
            setFifthB(true)
        }
        else if (c == myArr[1]["3"]) {
            setFirstB(false)
            setSB(false)
            setTB(true)
            setFB(true)
            setFifthB(true)
        }
        else if (c == myArr[2]["3"]) {
            setFirstB(false)
            setSB(true)
            setTB(false)
            setFB(true)
            setFifthB(true)
        }
        else if (c == myArr[3]["3"]) {
            setFirstB(false)
            setSB(true)
            setTB(true)
            setFB(false)
            setFifthB(true)
        }
        else if (c == myArr[4]["3"]) {
            setFirstB(false)
            setSB(true)
            setTB(true)
            setFB(true)
            setFifthB(false)
        }
    }
    return (
        <div id={styles.FirstDiv}>
            <ul>
                {myArr.map((data, index) => {
                    return (
                        <li onClick={() => myToogle(data["3"])} style={{ backgroundColor: data["2"].bg, color: data["2"].color }} key={index}>
                            <div>{data["0"]}</div>
                            <div>{data["1"]}</div>
                        </li>
                    )
                })}
                <li style={{ opacity: .6 }}>Design copied online, Developed by <Link href="https://rmsencode.com">RMSENCODE</Link></li>
            </ul>
        </div>
    )
}

function SecondDiv() {
    const sArr: [string, string, string] = [
        "Face Primer", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, sequi alias eligendi saepe fugit fugiat sint commodi eveniet unde nemo necessitatibus corrupti!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, excepturi suscipit iure, pariatur optio nam amet eum cum, esse natus similique nisi nobis praesentium dolorem ipsam unde quas cupiditate. Dignissimos."
    ]
    return (
        <div id={styles.SecondDiv}>
            <div id={styles.paragraph_div}>
                <h1>{sArr[0]}</h1>
                <p>{sArr[1]}</p>
                <p>{sArr[2]}
                </p>
            </div>
            <div id={styles.lastborder}></div>
        </div>
    )
}
import React from 'react'
import styles from "./Footer.module.scss"
import dataArray from "../data"
import Link from 'next/link';
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

export default function Footer() {

    return (
        <div className={styles.main}>
            <div><Link href="#">AKASAANI</Link></div>
            <div>
                {dataArray[3].map((response, index: number) => {
                    return (
                        <Link href={response["1"]} key={index}>{response["0"]}</Link>
                    )
                })}
            </div>
            <div>
                <Link href="#"><CiInstagram /></Link>
                <Link href="#"><CiLinkedin /></Link>
                <Link href="#"><FaSquareXTwitter /></Link>
                <Link href="#"><CiFacebook /></Link>
            </div>
            <div>
                <Link href="https://rmsencode.com">Developed by RMSENCODE</Link>
            </div>
        </div>
    )
}

"use client"

import React, { useState, useRef } from 'react'
import styles from "./Number18.module.scss"
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleSharp } from "react-icons/io5";
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { ImTumblr2 } from "react-icons/im";

export default function Number18() {
    return (
        <main id={styles.main}>
            <NavBar />
            <Header />
            <EmailForm />
            <CardsComponent />
            <ButtonComponent />
            <Footer />
            <Developer />
        </main>
    )
}

function NavBar() {
    const [mobileNav, setMobileNav] = useState(true)
    const element = useRef(null);
    function myFunction(clickEvent) {
        if (clickEvent == "openNavBar") {
            element.current.style.top = "42px"
            setMobileNav(false)
        }
        else {
            element.current.style.top = "-1042px"
            setMobileNav(true)
        }
    }
    return (
        <nav>
            <h1><Link href="#">BLAHBLAH</Link></h1>
            <main ref={element}>
                <ul>
                    <li><Link href="#">Menu</Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li><Link href="#">About</Link></li>
                </ul>
                <section>
                    <button>Login</button>
                    <button>Register</button>
                </section>
            </main>
            <div id={styles.nav_btn}>
                {mobileNav ? <RxHamburgerMenu onClick={() => myFunction("openNavBar")} /> : <IoCloseCircleSharp onClick={() => myFunction("closeNavBar")} />}
            </div>
        </nav>
    )
}

function Header() {
    return (
        <div id={styles.header}>
            <h2>More then just <br />shorter links</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste enim est rerum iusto aliquid doloremque deleniti amet deserunt. Repellat consectetur repudiandae, illo inventore dolorem doloribus ipsa nobis excepturi minus!</p>
            <button>Verify now</button>
        </div>
    )
}

function EmailForm() {
    return (
        <div id={styles.email_form}>
            <form>
                <input placeholder='Email *' type="text" required />
                <button>Email Alerts</button>
            </form>
        </div>
    )
}

function CardsComponent() {
    return (
        <div id={styles.cards_component}>
            <section>
                <h3>Advanced Shutter Class</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet impedit animi beatae tenetur facilis inventore magnam corrupti?</p>
            </section>

            <section>
                <div className={styles.each_component}>
                    <Image src="/gallery/apple-8027938_640.jpg" width={101} height={101} alt="" />
                    <h4>Valuable platform</h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste enim est rerum iusto aliquid doloremque deleniti amet deserunt. Repellat consectetur repudiandae, illo inventore dolorem doloribus ipsa nobis excepturi minus!
                    </p>
                </div>
                <div className={styles.border_class}></div>
                <div className={styles.each_component}>
                    <Image src="/gallery/apple-8027938_640.jpg" width={101} height={101} alt="" />
                    <h4>Valuable platform</h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste enim est rerum iusto aliquid doloremque deleniti amet deserunt. Repellat consectetur repudiandae, illo inventore dolorem doloribus ipsa nobis excepturi minus!
                    </p>
                </div>
                <div className={styles.border_class}></div>
                <div className={styles.each_component}>
                    <Image src="/gallery/apple-8027938_640.jpg" width={101} height={101} alt="" />
                    <h4>Valuable platform</h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste enim est rerum iusto aliquid doloremque deleniti amet deserunt. Repellat consectetur repudiandae, illo inventore dolorem doloribus ipsa nobis excepturi minus!
                    </p>
                </div>
                <div style={{ opacity: 0 }} className={styles.border_class}></div>
            </section>
        </div>
    )
}

function ButtonComponent() {
    return (
        <div id={styles.submit_component}>
            <div>Dear</div>
            <button>Hello World!</button>
        </div>
    )
}

function Footer() {
    const footerArray = [
        [{
            "0": "Menu",
            "1": ["Contact", "#"],
            "2": ["About", "#"],
            "3": ["Terms", "#"],
            "4": ["", ""],
        }
            ,
        {
            "0": "Services",
            "1": ["XYZ", "#"],
            "2": ["ETC", "#"],
            "3": ["XYZ", "#"],
            "4": ["", ""],
        },
        {
            "0": "Pages",
            "1": ["Home", "#"],
            "2": ["Blog", "#"],
            "3": ["Latest", "#"],
            "4": ["Sitemap", "#"],
        }],
        [
            {
                icon: <FaLinkedin />,
                href: "#"
            },
            {
                icon: <FaXTwitter />,
                href: "#"
            },
            {
                icon: <FaFacebook />,
                href: "#"
            },
            {
                icon: <ImTumblr2 />,
                href: "#"
            },
        ]
    ]
    return (
        <footer id={styles.footer}>
            <ul>
                {footerArray[0].map((response, index) => {
                    return (
                        <li key={index}>
                            <div style={{ fontWeight: "bolder" }}>
                                <Link href={response["0"][1]}>{response["0"]}</Link>
                            </div>
                            <div>
                                <Link href={response["1"][1]}>{response["1"][0]}</Link>
                            </div>
                            <div>
                                <Link href={response["2"][1]}>{response["2"][0]}</Link>
                            </div>
                            <div>
                                <Link href={response["3"][1]}>{response["3"][0]}</Link>
                            </div>
                            <div>
                                <Link href={response["4"][1]}>{response["4"][0]}</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <section>
                {footerArray[1].map((response, index) => {
                    return (
                        <div key={index}>
                            <Link href="#">{response.icon}</Link>
                        </div>
                    )
                })}
            </section>
        </footer>
    )
}

function Developer() {
    return <Link href="https://rmsencode.com">Developed by RMSENCODE</Link>

}
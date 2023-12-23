"use client"
import style from "./Number13.module.css"
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
    return (
        <>
            <footer id={style.footer}>
                <section id={style.section_desktop}>
                    <SectionDesktop />
                </section>
                <section id={style.section_mobile}>
                    <SectionMobile />
                </section>

            </footer>

        </>
    )
}

function SectionDesktop() {
    interface dataArray_type {
        "0": [
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            }
        ],
        "1": [
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            }
        ],
        "2": [
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            }
        ],
        "3": [
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            }
        ]
    }

    let dataArray: dataArray_type = {
        "0": [
            {
                url: "#",
                title: "FAQ"
            },
            {
                url: "#",
                title: "Investor Relations"
            },
            {
                url: "#",
                title: "Privacy"
            },
            {
                url: "#",
                title: "Speed Test"
            }
        ],
        "1": [
            {
                url: "#",
                title: "Help Center"
            },
            {
                url: "#",
                title: "Jobs"
            },
            {
                url: "#",
                title: "Cookie Preferences"
            },
            {
                url: "#",
                title: "Legal Notices"
            }
        ],
        "2": [
            {
                url: "#",
                title: "Account"
            },
            {
                url: "#",
                title: "Ways to Watch"
            },
            {
                url: "#",
                title: "Corporate Information"
            },
            {
                url: "#",
                title: "Only on Netflix"
            }
        ],
        "3": [
            {
                url: "#",
                title: "Media Center"
            },
            {
                url: "#",
                title: "Term of Use"
            },
            {
                url: "#",
                title: "Contact Us"
            }
        ]

    }
    return (
        <>
            <div id={style.desktop_component}>
                <ul>
                    <Link className={style.first_statement} href="#">Questions? Contact us.</Link>
                    {dataArray["0"].map((data, index) => {
                        return (
                            <li key={index}>
                                <Link href={data.url}>{data.title}</Link>
                            </li>
                        )
                    })}
                </ul>

                <ul>
                    {dataArray["1"].map((data, index) => {
                        return (
                            <li key={index}>
                                <Link href={data.url}>{data.title}</Link>
                            </li>
                        )
                    })}
                </ul>

                <ul>
                    {dataArray["2"].map((data, index) => {
                        return (
                            <li key={index}>
                                <Link href={data.url}>{data.title}</Link>
                            </li>
                        )
                    })}
                </ul>

                <ul>
                    {dataArray["3"].map((data, index) => {
                        return (
                            <li key={index}>
                                <Link href={data.url}>{data.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

function SectionMobile() {
    type dataSet_type = {
        "0": [
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            }
        ],
        "1": [
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            },
            {
                url: string;
                title: string;
            }
        ]
    }
    let dataSet: dataSet_type = {
        "0": [
            {
                url: "#",
                title: "FAQ"
            },
            {
                url: "#",
                title: "Account"
            },
            {
                url: "#",
                title: "Investor Relations"
            },
            {
                url: "#",
                title: "Ways to Watch"
            },
            {
                url: "#",
                title: "Privacy"
            },
            {
                url: "#",
                title: "Corporate Information"
            },
            {
                url: "#",
                title: "Speed Test"
            },
            {
                url: "#",
                title: "Only on Netflix"
            },
            {
                url: "#",
                title: ""
            }
        ],
        "1": [
            {
                url: "#",
                title: "Help Center"
            },
            {
                url: "#",
                title: "Media Center"
            },
            {
                url: "#",
                title: "Jobs"
            },
            {
                url: "#",
                title: "Terms of Use"
            },
            {
                url: "#",
                title: "Cookie Preferences"
            },
            {
                url: "#",
                title: "Contact Us"
            },
            {
                url: "#",
                title: "Legal Notices"
            }
        ]
    }
    return (
        <>
            <div id={style.mobile_component}>
                <ul>
                    <Link className={style.first_statement} href="#">Questions? Contact us</Link>
                    {dataSet["0"].map((data, index) => {
                        return (
                            <li key={index}><Link href={data.url}>{data.title}</Link></li>
                        )
                    })}
                </ul>

                <ul>
                    {dataSet["1"].map((data, index) => {
                        return (
                            <li key={index}><Link href={data.url}>{data.title}</Link></li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
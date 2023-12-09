import React from 'react'
import { FaPersonArrowUpFromLine } from "react-icons/fa6"
import styles from "./Number6.module.css"
import { FaArrowDown } from "react-icons/fa";
import { HeadProvider, Title, Meta } from 'react-head';

export default function Number6() {
    return (
        <div id={styles.whole_page}>
            <HeadProvider>
                <Title>Clerk Price Plan</Title>
            </HeadProvider>
            <Nav />
            <div id={styles.header_and_below_div}>
                <Header />
                <Plans />
                <Bottom />
            </div>
        </div>
    )
}


function Nav() {
    return (
        <>
            <nav id={styles.nav}>
                <div id={styles.nav_first}>
                    <div id={styles.title}><FaPersonArrowUpFromLine />clerk</div>
                    <div id={styles.nav_ul}>
                        <ul>
                            <li>Product</li>
                            <li>Designer</li>
                            <li>Company</li>
                            <li>For Startups</li>
                            <li>Pricing</li>
                            <li>Documentation</li>
                        </ul>
                    </div>
                </div>

                <div id={styles.nav_second}>
                    <button id={styles.first_btn}>Signin</button>
                    <button id={styles.second_btn}>Get Started <FaArrowDown /></button>
                </div>

            </nav>
            <div id={styles.line_div}></div>
        </>
    )
}

function Header() {
    return (
        <>
            <div id={styles.header}>
                <div>Pricing</div>
                <div id={styles.inner_big_div}>
                    <h2>Cost effective Auth<br /> at your fingertips</h2>
                    <p>Clerk,s platform is guided by user access and driven by user management.<br /> Our suite of tools helps you easily navigate the landscape of user management.</p>
                </div>
            </div>
        </>
    )
}

function Plans() {
    return (
        <div id={styles.plans}>
            <div className={styles.div_class}>
                <div id={styles.silver_line}></div>
                <div>Free Plan</div>
                <p>Get started for free and scale with your success.<br />We never charge for inactive user.</p>
                <div className={styles.rate_div}>
                    <span>$</span><span>0</span><span>per month</span>
                </div>
                <button className={styles.btn_div} style={{ background: "silver", color: "black" }}>Sign up for free</button>
                <div>Get to production</div>
                <div className={styles.tickmark_div}>✅ No credit card required</div>
                <div className={styles.tickmark_div}>✅ 1000 monthly active user cap</div>
            </div>

            <div className={styles.div_class}>
                <div id={styles.colored_line}></div>
                <div>ProPlan</div>
                <p>Get started for free and scale with your success.<br />We never charge for inactive user.</p>
                <div className={styles.rate_div}>
                    <span>$</span><span>25</span><span>per month</span>
                </div>
                <button className={styles.btn_div} style={{ background: "rgb(55, 55, 116)", color: "white" }}>Sign up for free</button>
                <div>Get to production</div>
                <div className={styles.tickmark_div}>✅ $0.02 per MAU after 10000</div>
                <div className={styles.tickmark_div}>✅ Remover clerk trending</div>
                <br />
                <div style={{ color: "rgb(55, 55, 116)", fontWeight: "bolder" }}>
                    Explore add-ons *
                </div>
            </div>
        </div>
    )
}

function Bottom() {
    return (
        <>
            <footer id={styles.footer}>
                <div id={styles.line_bottom}></div>
                <div id={styles.end_div_all}>
                    <p>Trusted by lat-growing <br />companies around the world.</p>
                    <div id={styles.ul_contain_div}>
                        <ul>
                            <li>
                                condor
                            </li>
                            <li>LEVEL</li>
                            <li>Grafbase</li>
                            <li>Scam</li>
                            <li>HONEYLOVE</li>
                            <li>Pano</li>
                            <li>Covalent</li>
                            <li>SaadGrid</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

// https://cdn.dribbble.com/userupload/10955451/file/original-635d13a308b6341415817fee50a5ff10.jpg?resize=752x
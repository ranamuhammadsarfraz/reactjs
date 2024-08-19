"use client"
import styles from "../sign-up/file.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import React, { useRef } from "react";
import Link from "next/link";

function SignUp() {
    const sectClass = useRef<any>();
    return (
        <>
            <main className={styles.main_user_style_sheet}>
                <section ref={sectClass} onMouseEnter={() => {
                    sectClass.current.style.animation = "none"
                }}>
                    <div className={styles.first_div}>
                        <div className={styles.title}>Welcome Back!</div>
                        <p className={styles.para_graph}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus hic voluptatum dolore.
                        </p>
                        <div className={styles.btn}>
                            <Link href="sign-up">SIGN UP</Link>
                        </div>
                    </div>
                    <div className={styles.second_div}>
                        <div className={styles.create_account}>
                            <div className={styles.title}>Login</div>
                            <div className={styles.icon_div}>
                                <div>
                                    <FaFacebookF />
                                </div>
                                <div>
                                    <FaLinkedinIn />
                                </div>
                                <div>
                                    <FaTumblr />
                                </div>
                            </div>
                            <p>or use your email for login</p>
                        </div>
                        <form className={styles.form}>
                            <input type="email" required placeholder="Email" />
                            <input type="password" required placeholder="Password" />
                            <div className={styles.btn_}>
                                Login
                            </div>
                        </form>
                    </div>
                </section>
                <code>
                    <a className={styles.developer_attribute} href="https://rmsencode.com">Developed by rmsencode</a>
                </code>
            </main>
        </>
    )
}

export default SignUp;
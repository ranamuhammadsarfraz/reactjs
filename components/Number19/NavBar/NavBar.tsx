import styles from "./NavBar.module.scss"
import Link from "next/link"
export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <section>AKA Frank</section>
            <ul>
                <li>
                    <Link href="#">Homepage</Link>
                </li>
                <li>
                    <Link href="#">About</Link>
                </li>
                <li>
                    <Link href="#">Contact</Link>
                </li>
                <li>
                    <button>SignUp</button>
                </li>
            </ul>
        </nav>
    )
}
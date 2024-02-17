
import Link from "next/link"
import styles from "../../app/index.module.scss"
type pL_type = { title: string; url: string; }

const pL: pL_type[] = [
    {
        title: "Two Horn Horse",
        url: "/front-end-just/number-1"
    },
    {
        title: "Price Table",
        url: "/front-end-just/number-2"
    },
    {
        title: "Aviation",
        url: "/front-end-just/number-4"
    },
    {
        title: "Rotating Circle",
        url: "/front-end-just/number-5"
    },
    {
        title: "Clerk Price Plan",
        url: "/front-end-just/number-6"
    },
    {
        title: "Check Temperature",
        url: "/front-end-just/number-7"
    },
    {
        title: "Quiz",
        url: "/front-end-just/number-8"
    }
    ,
    {
        title: "Cards App",
        url: "/front-end-just/number-9"
    },
    {
        title: "BMI",
        url: "/front-end-just/number-10"
    }
    ,
    {
        title: "Check City Population",
        url: "/front-end-just/number-11"
    }
    ,
    {
        title: "Pollution Checker Tool",
        url: "/front-end-just/number-12"
    },
    {
        title: "SignIn Replica",
        url: "/front-end-just/number-13"
    },
    {
        title: "Text Sentiment",
        url: "/text-sentiment"
    },
    {
        title: "Emoji Generator",
        url: "/emoji-generator"
    },
    {
        title: "Contact Page Demo",
        url: "/contact-page-demo"
    },
    {
        title: "Dynamic Left",
        url: "/dynamic-left"
    },
    {
        title: "Stars | Astronomy",
        url: "/stars-information"
    },
    {
        title: "Dictionary",
        url: "/dictionary"
    },
    {
        title: "Currency Converter",
        url: "https://svelte-project-kohl.vercel.app/currency-converter"
    }
]

export default function Home() {

    return (
        <>
            <main id={styles.main}>
                <h1>SPA Project</h1>
                <ul>
                    {pL.map((data, index) => {
                        return (
                            <li key={index}>
                                <Link href={data.url}>{data.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </>
    )
}
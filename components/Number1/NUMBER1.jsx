import styles from "./NUMBER1.module.css"
import { GiPencilBrush } from 'react-icons/gi';
import { HeadProvider, Title, Meta } from 'react-head';

export default function Number_1() {
    return (
        <>
            <main id={styles.main}>
                <HeadProvider>
                    <Title>Two Horn Horse</Title>
                </HeadProvider>
                <nav>
                    <span>
                        <GiPencilBrush />
                    </span>
                    <span>
                        Pencil
                    </span>
                </nav>
                <div>
                    <section>
                        <h1>
                            Way beyond limit, <br />is out of sense
                        </h1>
                        <p>
                            Asking question is good but it should make sense like think then type or ask.
                        </p>
                    </section>
                    <button>Two Horns Horse</button>
                </div>
            </main>
        </>
    )
}
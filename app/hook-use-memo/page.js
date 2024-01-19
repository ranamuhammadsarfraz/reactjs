"use client"

// useMemo is used to enhance performance. It improves by stopping unwanted multicalls. Avoid using it much, only when need is true as it can increase memory usage.

import { useMemo, useState } from 'react'

export default function UseMemoHook() {
    const [count, setCount] = useState(0)
    const cValue = useMemo(() => {
        return {
            increment: () => {
                setCount(count + 1)
            },
            decrement: () => {
                setCount(count - 1)
            },
            color: 'white',
            background: 'green'
        }
    }, [count]) //you can write logic in array so it can auto execte value when ever given change.
    return (
        <>
            <h1 style={{ color: cValue.color, background: cValue.background }}>
                Hello World!
            </h1>
            <br />
            <h2>{count}</h2>
            <br />
            <button style={{ color: cValue.color, background: cValue.background }} onClick={cValue.increment}>Increment</button>
            <br />
            <button style={{ color: cValue.color, background: cValue.background }} onClick={cValue.decrement}>Decrement</button>
        </>
    )
}

// React.memo will not render component until props are Changed

// React.memo(function Component(props) {
    
//   })
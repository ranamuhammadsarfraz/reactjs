"use client"

// useCallback is used to enhance performance just like useMemo. But it is for function. It improves by stopping unwanted multicalls. Avoid using it much, only when need is true as it can increase memory usage.

import { useState, useCallback } from 'react'

export default function UseMemoHook() {
    const [count, setCount] = useState(0)
    const increment = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const decrement = useCallback(() => {
        setCount(count - 1)
    }, [count])
    //you can write logic in array so it can auto execte value when ever given change.
    return (
        <>
            <h1 style={{ color: "white", background: "black" }}>
                Hello World!
            </h1>
            <br />
            <h2>{count}</h2>
            <br />
            <button style={{ color: "white", background: "black" }} onClick={increment}>Increment</button>
            <br />
            <button style={{ color: "white", background: "black" }} onClick={decrement}>Decrement</button>
        </>
    )
}
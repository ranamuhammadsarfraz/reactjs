"use client"
import "./to-do-app.scss"
import React, { useState, useEffect } from "react"
import Link from "next/link"

export default function ToDoApp() {
    const [formValue, setFormValue] = useState({
        input: "",
    })

    const [myArray, setMyArray] = useState([])
    const [editValueIndex, setEditValueIndex] = useState({
        data: "",
        index: "",
        bool: true
    })

    function formMethod(eve: any) {
        eve.preventDefault()
        setMyArray([...myArray, formValue.input])
        setFormValue({ ...formValue, input: "" })
    }

    function editValue(eve) {
        eve.preventDefault()
        myArray[editValueIndex.index] = editValueIndex.data;
        setMyArray(myArray)
        setEditValueIndex({ ...editValueIndex, bool: true })
    }

    return (
        <>
            <main id="to_do_app_main">
                <FirstContainer formValue={formValue} setFormValue={setFormValue} formMethod={formMethod} editValueIndex={editValueIndex} editValue={editValue} setEditValueIndex={setEditValueIndex} />
                <SecondContainer myArray={myArray} setMyArray={setMyArray} setEditValueIndex={setEditValueIndex} editValueIndex={editValueIndex} />
                <Link href="https://rmsencode.com">Develop by rmsencode</Link>
            </main>
        </>
    )
}

function FirstContainer(props) {
    return (
        <div className="first_container">
            <h1>To do App</h1>
            <div className="border"></div>
            {props.editValueIndex.bool ? <form onSubmit={props.formMethod}>
                <div>
                    <input className="input"
                        value={props.formValue.input} onChange={(eve) =>
                            props.setFormValue({ ...props.formValue, input: eve.target.value })} type="text" required placeholder="Add Todo *" />
                    <button>Add</button>
                </div>
            </form> : <form onSubmit={props.editValue}>
                <div>
                    <input className="input"
                        value={props.editValueIndex.data} onChange={(eve) =>
                            props.setEditValueIndex({
                                ...props.editValueIndex,
                                data: eve.target.value
                            })} type="text" required placeholder="Edit Todo *" />
                    <button onClick={props.editValue}>Edit</button>
                </div>
            </form>}
        </div>
    )
}

function SecondContainer(props) {
    return (
        <div className="second_container">
            <h2>To do</h2>
            {props.myArray.map((data: string, index: number, array: string[]) => {
                return (
                    <div key={index} className="to_do">
                        <p>{data}</p>
                        <div className="btn_div">
                            <button onClick={() => {
                                props.setEditValueIndex({ data, index, bool: false })
                            }}>edit</button>
                            <button onClick={(eve) => {
                                eve.preventDefault()
                                let whatIs = array.filter((dta, num) => {
                                    return dta != array[index]
                                })
                                props.setMyArray(whatIs)
                                props.setEditValueIndex({
                                    ...props.editValueIndex,
                                    bool: true
                                })
                            }}>delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


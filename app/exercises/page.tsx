"use client"
import styles from "./exercises.module.scss"
import { useState, useEffect } from "react";
const webPagetitle: string = "Muscles exercise finder webtool"

function Page() {
    const [loading, setLoading] = useState<any | boolean>(true),
        [inputValue, setInputValue] = useState<string>(""),
        [result, setResult] = useState<any>([]),
        [exerciseName, setExerciseName] = useState<string>(""),
        [indicate, setIndicate] = useState<string>("loading")

    const urlIs: string[] = ["https://api.api-ninjas.com/v1/exercises?muscle=", "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"]

    const getData = async () => {
        const queryIs = "lats"
        await fetch(urlIs[0] + queryIs, {
            headers: {
                'X-Api-Key': urlIs[1]
            }
        }).then((response) => response.json()).then(response => {
            if (response.length === 0) {
                setIndicate("No information available...")
                return 0;
            }
            setResult(response)
            setLoading(false)
            setExerciseName(queryIs)
            window.scrollTo(0, 0);
        })
    },
        myMethod = async (e: any, text: string) => {
            e.preventDefault()
            window.scrollTo(0, 0);
            const inputValue_ = inputValue.toLowerCase()
            if (text == "main") {     //user entered
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + inputValue_, {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName(inputValue_)
                })
            }
            else if (text == "a") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "abdominals", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Abdominals")
                    setInputValue("")
                })
            }
            else if (text == "b") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "abductors", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Abductors")
                    setInputValue("")
                })
            }
            else if (text == "c") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "adductors", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Abductors")
                    setInputValue("")
                })
            }
            else if (text == "d") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "biceps", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Biceps")
                    setInputValue("")
                })
            }
            else if (text == "e") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "calves", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Calves")
                    setInputValue("")
                })
            }
            else if (text == "f") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "chest", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Chest")
                    setInputValue("")
                })
            }
            else if (text == "g") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "forearms", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Forearms")
                    setInputValue("")
                })
            }
            else if (text == "h") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "glutes", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Glutes")
                    setInputValue("")
                })
            }
            else if (text == "i") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "hamstrings", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Hamstrings")
                    setInputValue("")
                })
            }
            else if (text == "j") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "lats", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Lats")
                    setInputValue("")
                })
            }
            else if (text == "k") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "lower_back", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Lower Back")
                    setInputValue("")
                })
            }
            else if (text == "l") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "middle_back", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Middle Back")
                    setInputValue("")
                })
            }
            else if (text == "m") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "neck", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Neck")
                    setInputValue("")
                })
            }
            else if (text == "n") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "quadriceps", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Quadriceps")
                    setInputValue("")
                })
            }
            else if (text == "o") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "traps", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Traps")
                    setInputValue("")
                })
            }
            else if (text == "p") {
                setLoading(true)
                setIndicate("loading")
                await fetch(urlIs[0] + "triceps", {
                    headers: {
                        'X-Api-Key': urlIs[1]
                    }
                }).then((response) => response.json()).then(response => {
                    if (response.length === 0) {
                        setIndicate("No information available...")
                        return 0;
                    }
                    setResult(response)
                    setLoading(false)
                    setExerciseName("Triceps")
                    setInputValue("")
                })
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

    useEffect(() => {
        window.scrollTo(0, 0);
        getData()
    }, [])

    return (
        <main style={{ height: loading ? "100vh" : "" }} id={styles.main_exercises}>
            <Left loading={loading} inputValue={inputValue} setInputValue={setInputValue} myMethod={myMethod} result={result} setResult={setResult} />
            <Right loading={loading} inputValue={inputValue} setInputValue={setInputValue} myMethod={myMethod} result={result} setResult={setResult} exerciseName={exerciseName} indicate={indicate} />
        </main>
    )
}

export default Page;

type leftPropsTypes = {
    loading: boolean, inputValue: string, setInputValue: any, myMethod: any, result: {
        name: "string",
        type: "string",
        muscle: "string",
        equipment: "string",
        instructions: "string",
    } | any,
    setResult: any
}

function Left(props: leftPropsTypes) {
    interface theType {
        "0": string,
        "1": (e: any) => any
    }
    const theArray: theType[] = [
        {
            "0": "Abdominals",
            "1": (e) => props.myMethod(e, "a")
        },
        {
            "0": "Abductors",
            "1": (e) => props.myMethod(e, "b")
        },
        {
            "0": "Adductors",
            "1": (e) => props.myMethod(e, "c")
        },
        {
            "0": "Biceps",
            "1": (e) => props.myMethod(e, "d")
        },
        {
            "0": "Calves",
            "1": (e) => props.myMethod(e, "e")
        },
        {
            "0": "Chest",
            "1": (e) => props.myMethod(e, "f")
        },
        {
            "0": "Forearms",
            "1": (e) => props.myMethod(e, "g")
        },
        {
            "0": "Glutes",
            "1": (e) => props.myMethod(e, "h")
        },
        {
            "0": "Hamstrings",
            "1": (e) => props.myMethod(e, "i")
        },
        {
            "0": "Lats",
            "1": (e) => props.myMethod(e, "j")
        },
        {
            "0": "Lower Back",
            "1": (e) => props.myMethod(e, "k")
        },
        {
            "0": "Middle Back",
            "1": (e) => props.myMethod(e, "l")
        },
        {
            "0": "Neck",
            "1": (e) => props.myMethod(e, "m")
        },
        {
            "0": "Quadriceps",
            "1": (e) => props.myMethod(e, "n")
        },
        {
            "0": "Traps",
            "1": (e) => props.myMethod(e, "o")
        },
        {
            "0": "Triceps",
            "1": (e) => props.myMethod(e, "p")
        }
    ]
    return (
        <div id={styles.left_div}>
            <section>
                <h1>{webPagetitle}</h1>
                <form onSubmit={(e) => props.myMethod(e, "main")}>
                    <input value={props.inputValue} onChange={(c) => props.setInputValue(c.target.value)} type="text" required placeholder="Enter muscle name *" />
                    <button id={styles.search_icon}>
                        <div></div>
                        <div></div>
                    </button>
                </form>
                <div id={styles.img_div}>
                </div>
                <div id={styles.btn_div}>
                    {theArray.map((data: theType, index: number) => {
                        return <button key={index} onClick={data["1"]}>{data["0"]}</button>
                    })}
                    <code>
                        <a target="_blank" href="https://rmsencode.com">Develop by rmsencode</a>
                        <span> &copy; {new Date().getFullYear()}</span>
                        <div style={{ display: "none" }}>Application Programming Interface (API) is  by API-NINJAS.COM</div>
                    </code>
                </div>
            </section>
        </div>
    )
}

type rightPropsTypes = {
    loading: boolean,
    inputValue: string,
    setInputValue: any,
    myMethod: any,
    result: {
        name: "string",
        type: "string",
        muscle: "string",
        equipment: "string",
        instructions: "string",
    } | any,
    setResult: any,
    exerciseName: string,
    indicate: string
}

function Right(props: rightPropsTypes) {
    type theType = {
        name: "string",
        type: "string",
        muscle: "string",
        equipment: "string",
        instructions: "string",
    }
    return (
        <div id={styles.right_div}>
            <b>{props.loading ? "" : `Result: The exercise detail is for ${props.exerciseName}`}</b>
            {props.loading ? props.indicate : props.result.map((d: theType, i: number) => {
                return (
                    <div key={i} className={styles.each_div}>
                        <h3>
                            <span>Exercise: </span>
                            <span>{d.name}</span>
                        </h3>
                        <p>
                            <span>Type: </span>
                            <span>{d.type}</span>
                        </p>
                        <p>
                            <span>Muscles: </span>
                            <span>{d.muscle}</span>
                        </p>
                        <p>
                            <span>Equipment: </span>
                            <span>{d.equipment}</span>
                        </p>
                        <p>
                            <span>Instruction: </span>
                            <span>{d.instructions}</span>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
import React from 'react'
import style from "./loader.module.css"

export default function Loader() {
    return (
        <div id={style.main}>
            <div id={style.box}></div>
        </div>
    )
}

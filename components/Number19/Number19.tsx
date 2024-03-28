import React from 'react'
import NavBar from "./NavBar/NavBar"
import Header from "./Header/Header"
import TextImage from "./TextImage/TextImage"
import ThirdComponent from "./ThirdComponent/ThirdComponent"
import FourthComponent from "./FourthComponent/FourthComponent"
import FifthComponent from "./FifthComponent/FifthComponent"
import Footer from "./Footer/Footer"
import dataArray from "./data"
const bgArray = ["rgb(0, 162, 255)", "#ffffff", ""]

export default function Number19() {
    return (
        <>
            <div style={{ backgroundColor: bgArray[0], color: bgArray[1] }}>
                <NavBar />
                <Header />
            </div>
            <div>
                {dataArray[0].map((response, index) => {
                    return (
                        <TextImage key={index} {...response} />
                    )
                })}

            </div>
            <div>
                <ThirdComponent />
            </div>
            <div>
                <FourthComponent />
            </div>
            <div>
                <FifthComponent />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}


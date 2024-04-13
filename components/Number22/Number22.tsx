"use client"
import { useState } from "react"
import styles from "./Number22.module.scss"
import Link from "next/link"
import axios from "axios"
import dataArr from "../../components/file/data"
import { GiSandsOfTime } from "react-icons/gi";

function Number22() {
    const [loading, setLoading] = useState<boolean>(false),
        [input, setInput] = useState<string>(""),
        [myData, setMyData] = useState<any | { "0": string, "1": string | number }[]>(""),
        [alertDiv, setAlertDiv] = useState<string>("")

    async function myMethod(event: any) {
        event.preventDefault()
        const inputAdded: string = input[0].toUpperCase() + input.slice(1).toLowerCase()
        try {
            setLoading(true)
            setMyData("")
            const dataIt = await axios({
                method: 'GET',
                url: dataArr.api_url + '/v1/country?name=' + inputAdded,
                headers: { 'X-Api-Key': atob(dataArr.api_key) }
            });
            if (dataIt.data[0] == undefined) {
                setLoading(false)
                setMyData("")
                return setAlertDiv("Process failed, kindly check spelling.");
            }
            const myArray: { "0": string, "1": string | number }[] = [
                {
                    "0": "GDP (gross domestic product)",
                    "1": dataIt.data[0].gdp
                },
                {
                    "0": "Land Area",
                    "1": dataIt.data[0].surface_area
                },
                {
                    "0": "Unemployment",
                    "1": dataIt.data[0].unemployment + "%"
                },
                {
                    "0": "Imports",
                    "1": dataIt.data[0].imports
                },

                {
                    "0": "Homicide Rate",
                    "1": dataIt.data[0].homicide_rate
                },
                {
                    "0": "Currency",
                    "1": dataIt.data[0].currency.name
                },
                {
                    "0": "GDP Growth",
                    "1": dataIt.data[0].gdp_growth
                },
                {
                    "0": "CO2 Emission",
                    "1": dataIt.data[0].co2_emissions
                },
                {
                    "0": "Forest Area",
                    "1": dataIt.data[0].forested_area
                },
                {
                    "0": "Exports",
                    "1": dataIt.data[0].exports
                },
                {
                    "0": "Infant Morality",
                    "1": dataIt.data[0].infant_mortality
                },
                {
                    "0": "Threatened species",
                    "1": dataIt.data[0].threatened_species
                },
                {
                    "0": "Population",
                    "1": dataIt.data[0].population
                },
                {
                    "0": "Internet User",
                    "1": dataIt.data[0].internet_users + "%"
                },
                {
                    "0": "Fertility rate",
                    "1": dataIt.data[0].fertility
                },
                {
                    "0": "Population",
                    "1": dataIt.data[0].population
                },
                {
                    "0": "Name",
                    "1": dataIt.data[0].name
                },
                {
                    "0": "Region",
                    "1": dataIt.data[0].region
                }
            ]
            setMyData(myArray)
            setAlertDiv("")
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setAlertDiv("Process failed, kindly check Internet.");
            setMyData("")
        }
    }
    return (
        <main id={styles.main}>
            <div>
                <h1>Country Statistics</h1>
                <form onSubmit={myMethod}>
                    <input disabled={loading} value={input} onChange={(turn) => setInput(turn.target.value)} type="text"
                        placeholder="Country *" required />
                    <button disabled={loading}>search</button>
                </form>
            </div>
            <section>
                <p>{!loading ? alertDiv : <span><GiSandsOfTime className={styles.loading} /></span>}</p>
                {(myData == "") ? "" : myData.map((data: { "0": string, "1": string | number }, index: number) => {
                    return (
                        <code key={index}>
                            <button >
                                <main>{data["0"]}</main>
                                <main>{data["1"]}</main>
                            </button>
                        </code>
                    )
                })}
            </section>
            <span>
                <Link href="https://rmsencode.com">Webpage Developed by RMSENCODE</Link>
                <p>Data is controlled by third party API (Application programming interface).</p>
            </span>
        </main>
    )
}

export default Number22
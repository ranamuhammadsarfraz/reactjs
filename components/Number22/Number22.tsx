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
        let inputAdded: string = input[0].toUpperCase() + input.slice(1).toLowerCase()
        inputAdded = inputAdded == "Uk" ? "United Kingdom" : inputAdded
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
                    "1": dataIt.data[0].gdp + " USD"
                },
                {
                    "0": "Land Area",
                    "1": dataIt.data[0].surface_area + "km²"
                },
                {
                    "0": "Unemployment",
                    "1": dataIt.data[0].unemployment + "%"
                },
                {
                    "0": "Imports",
                    "1": dataIt.data[0].imports + " USD"
                },

                {
                    "0": "Homicide Rate",
                    "1": dataIt.data[0].homicide_rate + "%"
                },
                {
                    "0": "Currency",
                    "1": dataIt.data[0].currency.name
                },
                {
                    "0": "GDP Growth",
                    "1": dataIt.data[0].gdp_growth + " USD"
                },
                {
                    "0": "CO2 Emission",
                    "1": dataIt.data[0].co2_emissions + " million metric tons "
                },
                {
                    "0": "Forest Area",
                    "1": dataIt.data[0].forested_area + "%"
                },
                {
                    "0": "Exports",
                    "1": dataIt.data[0].exports + " USD"
                },
                {
                    "0": "Threatened species",
                    "1": dataIt.data[0].threatened_species + " species"
                },
                {
                    "0": "Population",
                    "1": dataIt.data[0].population + " million"
                },
                {
                    "0": "Internet User",
                    "1": dataIt.data[0].internet_users + "%"
                },
                {
                    "0": "Employment in agriculture",
                    "1": dataIt.data[0].employment_agriculture + "%"
                },
                {
                    "0": "Urban Population",
                    "1": dataIt.data[0].urban_population + "%"
                },
                {
                    "0": "Urban population growth",
                    "1": dataIt.data[0].urban_population_growth + "% yearly"
                },
                {
                    "0": "Name",
                    "1": dataIt.data[0].name
                },
                {
                    "0": "Capital",
                    "1": dataIt.data[0].capital
                },
                {
                    "0": "Currency code",
                    "1": dataIt.data[0].currency.code
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
            <h2>{(myData == "") ? "" : myData[16]["1"]}</h2>
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
                <Link href={atob(dataArr.developer)}>Developed by rmsencode</Link>
                <p>All rights reserved</p>
                <p>Data is controlled by third party API (Application programming interface).</p>
            </span>
        </main>
    )
}

export default Number22
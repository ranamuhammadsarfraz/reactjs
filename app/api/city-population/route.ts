import { NextResponse } from "next/server";

export async function GET() {
    let data;
    await fetch('https://api.api-ninjas.com/v1/city?name=' + "Lahore", {
        headers: {
            'X-Api-Key': "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"
        }
    }).then((res) => res.json()).then((res) => {
        data = res
    })
    interface dataType {
        name: string,
        latitude: number,
        longitude: number,
        country: string,
        population: number,
        is_capital: boolean
    }
    let data_: [dataType] = data
    return NextResponse.json(data_)
}

export async function POST(request: Request) {
    const fhg = await request.json()
    let data;
    await fetch('https://api.api-ninjas.com/v1/city?name=' + fhg.city, {
        headers: {
            'X-Api-Key': "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"
        }
    }).then((res) => res.json()).then((res) => {
        data = res
    })
    interface dataType {
        name: string,
        latitude: number,
        longitude: number,
        country: string,
        population: number,
        is_capital: boolean
    }
    let data_: [dataType] = data
    return NextResponse.json(data_)
}
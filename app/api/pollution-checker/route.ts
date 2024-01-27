import { NextResponse } from "next/server";

type dataType = {
    CO: { concentration: number, aqi: number },
    NO2: { concentration: number, aqi: number },
    O3: { concentration: number, aqi: number },
    SO2: { concentration: number, aqi: number },
    'PM2.5': { concentration: number, aqi: number },
    PM10: { concentration: number, aqi: number },
    overall_aqi: number
}

export async function GET(request: Request) {
    let data_;
    let city = "Lahore"
    await fetch("https://api.api-ninjas.com/v1/airquality?city=" + city, {
        method: 'GET',
        headers: {
            'X-Api-Key': "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"
        },
    })
        .then(response => response.json())
        .then(response => {
            data_ = response
        })
    let data: dataType = data_
    return NextResponse.json({ data, city }, { status: 201 })
};

export async function POST(request: Request) {
    const cityObject: { city: string } = await request.json();
    let city = cityObject.city.toLowerCase()
    let data_;
    await fetch("https://api.api-ninjas.com/v1/airquality?city=" + city, {
        method: 'GET',
        headers: {
            'X-Api-Key': "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"
        },
    })
        .then(response => response.json())
        .then(response => {
            data_ = response
        })
    let data: dataType = data_
    return NextResponse.json({ data, city }, { status: 201 })
};

export async function DELETE(request: Request) {
    return NextResponse.json("No Implementation!", { status: 501 })
};

export async function PUT(request: Request) {
    return NextResponse.json("No Implementation!", { status: 501 })
};
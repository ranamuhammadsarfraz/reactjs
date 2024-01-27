import { NextResponse } from "next/server";

interface dataType {
    name: string;
    constellations: string;
    right_ascension: string;
    declination: string;
    apparent_magnitude: string;
    absolute_magnitude: string;
    distance_light_year: string;
    spectral_class: string;
}

export async function GET() {
    let data;
    await fetch('https://api.api-ninjas.com/v1/stars?name=' + 'vega', {
        headers: {
            'X-Api-Key': "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"
        }
    }).then((res) => res.json()).then((res) => {
        data = res
    })
    const data_: dataType = data;
    return NextResponse.json(data_)
}

export async function POST(request: Request) {
    const myObj = await request.json(),
        { star } = myObj;
    let data;
    await fetch('https://api.api-ninjas.com/v1/stars?name=' + star, {
        headers: {
            'X-Api-Key': "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"
        }
    }).then((res) => res.json()).then((res) => {
        data = res
    })
    const data_: dataType = data;
    return NextResponse.json(data_)
}
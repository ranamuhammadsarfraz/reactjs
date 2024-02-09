import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const wordObj: { word: string } = await request.json(),
        { word } = wordObj
    let data;
    await fetch('https://api.api-ninjas.com/v1/dictionary?word=' + word, {
        headers: {
            'X-Api-Key': "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3"
        }
    }).then((res) => res.json()).then((res) => {
        data = res
    })
    type dataT = {
        "definition": string,
        "word": string,
        "valid": boolean
    }
    const dataSend: dataT = data;

    return NextResponse.json(dataSend)
}
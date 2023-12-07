import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ hello: "world" })
}

export async function POST(request: Request) {
    console.log(request.method)
    const fhg = await request.json()
    return NextResponse.json({ data: fhg })
}
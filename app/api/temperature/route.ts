import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
    return NextResponse.json({ hello: "world" })
}

export async function POST(request: Request, context: any) {
    const { params } = context
    console.log(context)
    return NextResponse.json({ data: "hello" })
}
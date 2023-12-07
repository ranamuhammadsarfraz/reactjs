import { NextResponse } from "next/server";
import user from "../../../../user.json"

export async function GET(request: Request, context: any) {
    const { params } = context,
        { userId } = params
    console.log(context)
    const findUser = user.filter((x) => {
        return x.id == userId
    })
    return NextResponse.json(findUser)
}
import { NextResponse } from "next/server"

export const GET = async(res: Response, req: Request) =>{
    return NextResponse.json({message:"hello"})
}

export const POST = async(rews: Response, req:Request) =>{

}
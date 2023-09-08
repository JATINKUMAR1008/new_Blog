import { PrismaClient } from "@prisma/client"
import { NextApiRequest } from "next"
import { NextResponse } from "next/server"

export const GET = async(res: Response, req: Request) =>{
    return NextResponse.json({message:"hello"})
}
const prisma = new PrismaClient()

export const POST = async(req: Request) =>{
   const userdata = await req.json()
   console.log(userdata)
   const savedData = await prisma.user.create({
    data: userdata
   })
   return NextResponse.json({success: true,savedData})
}
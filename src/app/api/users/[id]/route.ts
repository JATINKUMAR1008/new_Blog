import { Prisma, PrismaClient, User } from "@prisma/client"
import { NextResponse } from "next/server"
const prisma = new PrismaClient()
export const POST = async(res:Response, req:Request)=>{
    const email = await req.json()
    const data: User = await prisma.user.findFirst(
        {
            where:{
                email: email
            }
        }
    )
    console.log(data)
    return NextResponse.json(data)
}
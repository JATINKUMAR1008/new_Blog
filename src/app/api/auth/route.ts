import { Prisma, PrismaClient, User } from "@prisma/client"
import { NextResponse } from "next/server"
const prisma = new PrismaClient()
export const POST = async(req:Request,res:Response)=>{
    const ud = await req.json()
    const data = await prisma.user.findFirst(
        {
            where:{
                email: ud.email
            }
        }
    )
    console.log(data)
    if(ud.password === data?.password){
        return NextResponse.json({status:true,data})
    }
    return NextResponse.json(data)
}
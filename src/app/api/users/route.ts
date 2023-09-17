import { PrismaClient,User } from "@prisma/client"
import { NextApiRequest } from "next"
import { NextResponse } from "next/server"

export const GET = async(res: Response, req: Request) =>{
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
const prisma = new PrismaClient()

export const POST = async(req: Request) =>{
   const userdata = await req.json()
   console.log(userdata)
   const savedData = await prisma.user.create({
    data: userdata
   })
   return NextResponse.json({success: true,savedData})
}
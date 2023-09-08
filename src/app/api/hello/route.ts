import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) =>{
    try{
        return NextResponse.json({message:"Get"})
    }
    catch(err){
        return NextResponse.json({
            error:err
        })
    }
}
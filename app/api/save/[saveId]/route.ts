import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req:NextRequest,{params} : {params : {saveId : string}}) {
    const {userId} = auth()
    if(!userId){
        return NextResponse.json("Unauthorized")
    }
    const deletedSave = await prisma.save.delete({
        where: {
            id: params.saveId
        }
    })    
    return NextResponse.json(deletedSave)
}
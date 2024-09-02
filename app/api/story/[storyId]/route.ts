import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req:NextRequest,{params} : {params : {storyId : string}}) {
    const {userId} = auth()
    if(!userId){
        return NextResponse.json("Unauthorized")
    }
    const body = await req.json()
    const updateStory = await prisma.story.update({where : {id : params.storyId},data : {...body}})
    return NextResponse.json(updateStory)
}
export async function DELETE(req:NextRequest,{params} : {params : {storyId : string}}) {
    const {userId} = auth()
    if(!userId){
        return NextResponse.json("Unauthorized")
    }
    const deleteStory = await prisma.story.delete({where : {id : params.storyId}})
    return NextResponse.json(deleteStory)
}
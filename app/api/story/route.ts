import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const {userId} = auth()
    if(!userId){
        return NextResponse.json("Unauthorized")
    }
    const body = await req.json()
    const newStory = await prisma.story.create({
        data : {
            ...body
        }
    })
    return NextResponse.json(newStory)
}
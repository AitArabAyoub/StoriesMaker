"use client"
import { useAuth } from '@clerk/nextjs'
import { Save } from '@prisma/client'
import { Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

function SaveStory({saves , id} : {saves : Save[],id:string}) {
    const {userId} = useAuth()
    const router = useRouter()
    const handleSave = async()=>{
        const req = await fetch("/api/save",{method : "POST",body : JSON.stringify({userId,storyId:id})})
        if(req.ok){
            toast("Story Saved Successfully")
            router.refresh()
        }else{
            toast("Save Failed")
        }
    }
    return (
        <button className='btn'>
            {
                saves.find(el => el.storyId === id && el.userId === userId)
                ?
                <Heart className='text-red-600'/>
                :
                <Heart onClick={handleSave}/>
            }
        </button>
    )
}

export default SaveStory

import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import prisma from '@/utils/db'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import ReadSave from './readSave'
async function SaveCard({id,save}:{id:string,save:string}) {
    const story = await prisma.story.findUnique({where : {id : id}})
    return (
        <Card>
            {story?.image 
            ?
            <div className='w-full h-[300px] relative'><Image src={story.image} alt='story' fill  className='object-cover'/></div> 
            : 
            <div className='flex justify-center items-center h-[300px] w-full'><ImageIcon/></div>
            }
            <CardContent className='px-3'>
                <h2 className='text-xl font-bold'>{story?.title}</h2>
                <p className='trunc mb-2'>{story?.story}</p>
                <ReadSave id={save}/>
            </CardContent>
        </Card>
    )
}

export default SaveCard

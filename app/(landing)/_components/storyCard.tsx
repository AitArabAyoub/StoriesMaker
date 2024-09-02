import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from 'next/image'
import { Story } from '@prisma/client'
import { ImageIcon } from 'lucide-react'
import SaveStory from './saveStory'
import ReadStory from './readStory'
import prisma from '@/utils/db'
type Props = {
    story : Story
}
async function StoryCard({story} : Props) {
    const saves = await prisma.save.findMany({where : {storyId : story.id}}) 
    return (
        <Card>
            {story.image 
            ?
            <div className='w-full h-[300px] relative'><Image src={story.image} alt='story' fill  className='object-cover'/></div> 
            : 
            <div className='flex justify-center items-center h-[300px] w-full'><ImageIcon/></div>
            }
            <CardContent className='px-3'>
                <h2 className='text-xl font-bold'>{story.title}</h2>
                <p className='trunc'>{story.story}</p>
                <div className='flex justify-between py-2'>
                    <ReadStory title={story.title} story={story.story || ""}/>
                    <SaveStory saves={saves} id={story.id}/>
                </div>
            </CardContent>
        </Card>
    )
}

export default StoryCard

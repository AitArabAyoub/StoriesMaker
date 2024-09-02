import prisma from '@/utils/db'
import Image from 'next/image'
import React from 'react'
import UnSave from '../_components/unSave'

async function Save({params}:{params : {saveId:string}}) {
    const save = await prisma.save.findUnique({where : {id : params.saveId}})
    const story = await prisma.story.findUnique({where : {id : save?.storyId}})
    return (
        <div className='container pt-10'>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold'>{story?.title}</h2>
                    <p className=''>{story?.story}</p>
                    <UnSave saveId={params.saveId}/>
                </div>
                <div className='w-full relative h-[300px]'>
                    <Image src={story?.image || ""} alt='story' fill className='object-cover rounded-md'/>
                </div>
            </div>
        </div>
    )
}

export default Save

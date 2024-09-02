import prisma from '@/utils/db'
import React from 'react'
import StoryCard from '../_components/storyCard'

async function Stories() {
    const stories = await prisma.story.findMany({orderBy : {createdAt : "desc"}})
    if(stories.length === 0){
        return(
            <div className='container h-screen flex justify-center items-center'>
                <h2 className='text-3xl font-bold'>No Stories To Show</h2>
            </div>
        )
    }
    return (
        <div className='container h-screen'>
            <h2 className='text-3xl font-bold text-center'>Explore Others Stories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-5'>
                {
                    stories.map(el=>{
                        return <StoryCard story={el} key={el.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Stories

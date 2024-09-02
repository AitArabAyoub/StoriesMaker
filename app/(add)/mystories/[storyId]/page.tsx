import React from 'react'
import EditForm from '../_components/editForm'
import prisma from '@/utils/db'

async function MyStory({params}:{params:{storyId:string}}) {
    const story = await prisma.story.findUnique({where : {id : params.storyId}})
    return (
        <div className='container'>
            {story && <EditForm story={story}/>}
        </div>
    )
}

export default MyStory

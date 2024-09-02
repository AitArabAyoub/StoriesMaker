import { columns } from '@/app/_components/columns'
import { DataTable } from '@/app/_components/data-table'
import prisma from '@/utils/db'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

async function MyStories() {
    const {userId} = auth()
    const stories = await prisma.story.findMany({where : {userId : userId as string},orderBy : {createdAt : 'desc'}})
    return (
        <div className='container'>
            <DataTable columns={columns} data={stories} />
        </div>
    )
}

export default MyStories

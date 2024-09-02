import prisma from '@/utils/db'
import { auth } from '@clerk/nextjs/server'
import React from 'react'
import SaveCard from './_components/saveCard'

async function Saves() {
    const {userId} = auth()
    const saves = await prisma.save.findMany({where : {userId : userId as string},orderBy : {createdAt : "desc"}})
    if(saves.length === 0){
        return(
            <div className='container h-screen flex justify-center items-center'>
                <h2 className='text-3xl font-bold'>No Saves To Show</h2>
            </div>
        )
    }
    return (
        <div className='container'>
            <h2 className='text-3xl font-bold text-center'>Your Saves</h2>
            <div className='grid grid-cols-4 gap-3 pt-5'>
                {
                    saves.map(el =>{
                        return <SaveCard id={el.storyId} save={el.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Saves

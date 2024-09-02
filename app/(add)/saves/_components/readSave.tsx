import Link from 'next/link'
import React from 'react'

function ReadSave({id}:{id:string}) {
    return (
        <Link href={`/saves/${id}`} className='btn'>
            Read More
        </Link>
    )
}

export default ReadSave

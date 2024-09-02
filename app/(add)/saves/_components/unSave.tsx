"use client"
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

function UnSave({saveId}:{saveId:string}) {
    const router = useRouter()
    const [isDeleting,setDeleting] = useState(false)
    const handleClick = async()=>{
        setDeleting(true)
        const req= await fetch(`/api/save/${saveId}`,{method : "DELETE"})
        if(req.ok){
            toast("Save Daleted")
            router.push("/saves")
            router.refresh()
        }else{
            toast(" Delete failed")
        }
        setDeleting(false)
    }
    return (
        <button className='btn w-fit mx-auto mt-2' onClick={handleClick}>
            {isDeleting ?<Loader className='animate-spin'/> :"UnSave"}
        </button>
    )
}

export default UnSave

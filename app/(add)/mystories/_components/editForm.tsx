"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import UploadThing from '@/app/_components/uploadThing';
import { toast } from "sonner"
import { useAuth } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { Story } from '@prisma/client';
import { useRouter } from 'next/navigation';
const validationSchema = z.object({
    title : z.string().min(10,{message : 'Too Short'}),
    story : z.string(),
});
type SchemaProps = z.infer<typeof validationSchema>;
type Props = {
    story : Story
}
function EditForm({story}:Props) {
    const {userId} = useAuth()
    const router = useRouter()
    const [Image,setImage] = useState("")
    const [isCreating,setCreating] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SchemaProps>({
        resolver: zodResolver(validationSchema)
    });
    const submitForm = async(data:SchemaProps)=>{
        setCreating(true)
        const req = await fetch(`/api/story/${story.id}`,{method : "PATCH",body : JSON.stringify({...data,image:Image,userId})})
        if(req.ok){
            toast("Story Updated Successfully")
            router.push("/mystories")
            router.refresh()
        }else{
            toast("Update Failed")
        }
        setCreating(false)
    }
    return (
        <form onSubmit={handleSubmit(submitForm)} className="w-2/3 mx-auto">
            <div className="my-2">
                <label htmlFor="title" className="block text-sm font-medium mb-2 dark:text-white">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    defaultValue={story.title}
                    className="py-3 px-4 block w-full text-black border border-gray-400 rounded-lg dark:text-white" 
                    {...register('title')}
                    />
                {errors?.title && <span className="text-red-700 font-bold">{errors.title.message}</span>}
            </div>
            <div className="my-2">
                <label htmlFor="story" className="block text-sm font-medium mb-2  dark:text-white">Story</label>
                <textarea 
                    id="story" 
                    defaultValue={story.story || ""}
                    className="py-3 px-4 block w-full text-black border border-gray-400 rounded-lg dark:text-white" 
                    {...register('story')}
                />
                {errors?.story && <span className="text-red-700 font-bold">{errors.story.message}</span>}
            </div>
            <div className='my-2'>
                <UploadThing setImage={setImage}/>
            </div>
            <div className='my-2 border'>
                <img src={Image || story.image || ""} alt="" className='w-full h-[300px] object-cover rounded-md'/>
            </div>
            <button type="submit" className="btn block mx-auto">
                {isCreating ? <Loader className='animate-spin'/> : "Update"}
            </button>
        </form>
    )
}

export default EditForm

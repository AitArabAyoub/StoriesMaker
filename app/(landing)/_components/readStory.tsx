import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
function ReadStory({title,story}:{title:string,story:string}) {
    return (
        <AlertDialog>
        <AlertDialogTrigger className='btn'>Read More</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle className='text-2xl font-bold dark:text-white'>{title}</AlertDialogTitle>
            <AlertDialogDescription className='text-black font-semibold dark:text-white'>
                {story}
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
}

export default ReadStory

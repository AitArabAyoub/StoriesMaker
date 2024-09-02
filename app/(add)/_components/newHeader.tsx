"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'
import NewNav from './newNav'
import {Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { ModeToggle } from '@/app/_components/mode-button'
import Link from 'next/link'
function NewHeader() {
    const {user} = useUser()
    return (
        <div className='container flex justify-between items-center py-2'>
            {user ? <h2>Welcome Back, {user.fullName}</h2> : <div className='w-[250px] h-3 rounded-md bg-gray-400'></div>}        
            <div className='hidden md:block'>
                <NewNav/>
            </div>
            <div className='flex gap-2 items-center'>
                <ModeToggle/>
                <Link href="/" className='px-3 py-2 rounded-md bg-gray-200 text-black'>Back Home</Link>
                <Sheet>
                    <SheetTrigger className='block md:hidden'>
                        <Menu/>
                    </SheetTrigger>
                    <SheetContent>
                        <NewNav/>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default NewHeader

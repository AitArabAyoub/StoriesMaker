"use client"
import Image from 'next/image'
import React from 'react'
import Nav from './nav'
import { ModeToggle } from '@/app/_components/mode-button'
import {Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

function Header() {
    const {user} = useUser()
    return (
        <div className='container flex justify-between items-center py-2'>
            <Image src="/lightlogo.svg" alt='logo' width={50} height={50} className='block dark:hidden'/>
            <Image src="/darklogo.svg" alt='logo' width={130} height={130} className='hidden dark:block'/>
            <div className='hidden md:block'>
                <Nav/>
            </div>
            <div className='flex gap-2 items-center'>
                <ModeToggle/>
                {
                    user 
                    ?
                    <>
                        <UserButton/>
                        <Link href="/new" className='px-3 py-2 rounded-md bg-gray-200 text-black'>Create New</Link>
                    </>
                    :
                    <>
                        <Link href="/sign-in" >Login</Link>
                    </>
                }
                <Sheet>
                    <SheetTrigger className='block md:hidden'>
                        <Menu/>
                    </SheetTrigger>
                    <SheetContent>
                        <Nav/>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Header

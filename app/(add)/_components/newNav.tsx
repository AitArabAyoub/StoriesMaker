"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NewNav() {
    const pathname = usePathname()
    const links = [{title : "New",link:"/new"},{title : "MyStories",link:"/mystories"},{title : "Saves",link:"/saves"}]
    return (
        <ul className='flex flex-col md:flex-row gap-2'>
            {
                links.map(el=>{
                    return(
                        <li>
                            <Link href={el.link} className={`link ${pathname === el.link ? 'font-bold dark:text-white' : 'text-gray-400'}`}>{el.title}</Link>
                        </li>
                        )
                })
            }
        </ul>
    )
}

export default NewNav

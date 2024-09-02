"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Story } from "@prisma/client"
import { MoreHorizontal, Pen, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const columns: ColumnDef<Story>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => {
            const getDate = row.getValue("createdAt") as Date
            const Date = getDate.toDateString()
            return <div className="font-medium">{Date}</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const story = row.original
            const router = useRouter()
            const deleteStory = async()=>{
                const req = await fetch(`/api/story/${story.id}`,{method : "DELETE"}) 
                if(req.ok){
                    toast("Story Deleted Successfully")
                    router.refresh()
                }else{
                    toast("Delete Failed")
                }
            }
            return (
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => router.push(`/mystories/${story.id}`) }
                        className="flex gap-1"
                    >
                        <Pen className="h-3"/> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={deleteStory }
                        className="flex gap-1"
                    >
                        <Trash className="h-3"/> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

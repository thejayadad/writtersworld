'use server'

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma"
import { redirect } from "next/navigation";

export async function updatePost(eventData: { id: string, title: string; content: string }){
    try {
        const {id, title, content} = eventData
        const adjContact = await prisma.post.update({
            where:{
                id: id
            },
            data: {
                title, content
            }
        })
    } catch (error) {
        console.log("Updates Contact Error " + error)
        throw new Error("Error Updating " + error)
        
    }
    revalidatePath('/')
    redirect('/')
}
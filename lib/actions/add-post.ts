'use server'

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma"
import { redirect } from "next/navigation";

export async function addPost(eventData: { title: string; content: string }) {
    try {
    
    const {title, content} = eventData
    const newContact = await prisma.post.create({
        data: {
            title, content
        }
    })
    return newContact
} catch (error) {
    console.log("New Contact Error " + error)
    
}

}
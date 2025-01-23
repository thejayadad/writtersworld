'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "../prisma"
import { redirect } from "next/navigation"

export async function deleteContact(eventData: string){
    try {
        const id = eventData
        const deletecon = await prisma.post.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.log("Error deleting.. " + error)
    }
    revalidatePath('/')
    redirect('/')
}
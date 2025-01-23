'use server'

import { prisma } from "../prisma"

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
        return adjContact
    } catch (error) {
        console.log("Updates Contact Error " + error)
        throw new Error("Error Updating " + error)
        
    }
}
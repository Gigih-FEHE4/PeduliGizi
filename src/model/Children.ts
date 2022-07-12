import { Timestamp } from "firebase/firestore"

export type Children = {
    id: string,
    birthDate: Timestamp, 
    gender: string, 
    name: string, 
    parentId: string, 
    weekOfBirth: string
}
import {bookables, users} from '../static-data.json'

export type Bookable = {
    id: number,
        group: string,
        title: string,
        notes: string,
        sessions: number[],
        days: number[]
}

export type User = {
    id: number,
    name: string,
    img: string,
    title: string,
    notes: string
 }

export function getBookables(): Bookable[] {
    return bookables
}

export function getUsers(): User[] {
    return users
}
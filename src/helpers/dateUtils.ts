import { sortAndDeduplicateDiagnostics } from "typescript"

export type Week = {
    date: Date,
    start: Date,
    end: Date
}

export function addDays(forDate: Date, days = 0){

    let date = new Date(forDate.getFullYear(),
    forDate.getMonth(), forDate.getDate() + days)
    return date
}

export function getWeek(forDate: Date): Week{
    let day = forDate.getDay()

    return {
        date: forDate,
        start: addDays(forDate, -day),
        end: addDays(forDate, 6-day)
    }
}
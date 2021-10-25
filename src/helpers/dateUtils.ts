
export type Week = {
    date: Date,
    start: Date,
    end: Date
}

export function addDays(forDate: Date, days = 0){
    
}

export function getWeek(forDate: Date){
    let day = forDate.getDay()

    return {
        date: forDate,
        start: forDate,

    }
}
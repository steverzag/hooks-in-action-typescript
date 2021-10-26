import { addDays, getWeek, Week } from "../helpers/dateUtils";

export type Action = {
    type: ActionKind,
    payload?: any
}

export enum ActionKind {
    TODAY,
    PREVIUS_WEEK,
    NEXT_WEEK
}

export function weekReducer(week: Week, action: Action): Week {

    let date: Date
    switch (action.type) {
        case ActionKind.TODAY:
            return getWeek(new Date())
        case ActionKind.NEXT_WEEK:
            date = addDays(week.date, 7)
            return getWeek(date)
        case ActionKind.PREVIUS_WEEK:
            date = addDays(week.date, -7)
            return getWeek(date)
        default:
        throw new Error("Bad opration request")
    }
}
import { BookableState } from "../components/BookablesList";

export type Action = {
    type: ActionKind,
    payload?: any
}

export enum ActionKind {
    NEXT_BOOK,
    SET_BOOK,
    SET_GROUP,
    TOGGLE_DETAILS
}

export function bookableReducer(state: BookableState, action: Action): BookableState{

    switch(action.type){
        case ActionKind.SET_BOOK:
            return {...state, bookIndex: action.payload}
        case ActionKind.SET_GROUP:
            console.log(action.payload)
            return {...state, group: action.payload, bookIndex: 0}
        case ActionKind.TOGGLE_DETAILS:
            return {...state, showDetails: !state.showDetails}
        default:
            return state
    }
}
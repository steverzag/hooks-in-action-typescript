import { useReducer } from "react"
import { getWeek, Week } from "../helpers/dateUtils"
import { ActionKind, weekReducer } from "../reducers/weekReducer"

type Props = {
    date: Date
}
const WeekPicker: React.FC<Props> = ({ date }) => {

    const [week, dispatch] = useReducer(weekReducer, date, getWeek)
    
    return (
        <div>
            <div>
                <button className="px-4 btn btn-primary mx-2"
                    onClick={() => dispatch({ type: ActionKind.PREVIUS_WEEK })}>Previus</button>
                <button className="px-4 btn btn-primary mx-2"
                    onClick={() => dispatch({ type: ActionKind.TODAY })}>Today</button>
                <button className="px-4 btn btn-primary mx-2"
                    onClick={() => dispatch({ type: ActionKind.NEXT_WEEK })}>Next</button>
            </div>
            {console.log(week.start.toDateString() + "-" + week.end.toDateString())}
            {week.start.toDateString()} - {week.end.toDateString()}
        </div>
    )
}

export default WeekPicker
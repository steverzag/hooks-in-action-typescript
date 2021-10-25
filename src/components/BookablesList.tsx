import { Fragment, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { getBookables } from '../helpers/apiCalls'

import {days, sessions} from '../static-data.json'


const BookablesList = () => {

    const bookables = getBookables()
    let groups = bookables.map(book => (book.group))
    const [group, setGroup] = useState(bookables[0].group)
    const [bookIndex, setBookIndex] = useState(0)
    const bookablesInGroup = bookables.filter(b => b.group === group)
    const bookable = bookablesInGroup[bookIndex]
    const [showDetails, setShowDetails] = useState(false)
    groups = groups.reduce((ack, value) => {
        let contains = false
        ack.forEach(s => {
            if(s === value) contains = true
        })
        if(contains)
            return ack
        return [...ack, value]
    }, [] as string[])

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setGroup(event.target.value)
        setBookIndex(0)
    }

    function handleNext() {
        let next = (bookIndex === bookablesInGroup.length - 1)
                    ? 0 : bookIndex + 1
        setBookIndex(next)
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-3 ml-3 text-center">
                    <select value={group} onChange={handleChange}>
                        {groups.map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                    <ul>
                        {bookablesInGroup.map((value, index) => (
                            <li className={(index === bookIndex) ? "active m-2" : "m-2"} key={index}>
                                <button onClick={() => setBookIndex(index)}
                                className="btn btn-primary w-100" key={index}>{value.title}</button>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-info mt-3" onClick={handleNext}>Next <FaArrowRight/></button>
                </div>
                {bookable && 
                <div className="col-9">
                    <div>
                        <h2 className="d-inline">{bookable.title}</h2>
                        <span>
                            <input type="checkbox" name="check-details"  
                            onChange={() => setShowDetails(!showDetails)}/>
                            <label htmlFor="check-details">Show details</label>
                        </span>
                        <p>{bookable.notes}</p>
                    </div>
                    {showDetails && 
                    <div className="p-2">
                        <h4>Availability</h4>
                        <ul className="my-3">
                            {bookable.days.map((value, index) => (
                                <li key={index}>{days[value]}</li>
                            ))}
                        </ul>
                        <ul>
                            {bookable.sessions.map((value, index) => (
                                <li key={index}>{sessions[value]}</li>
                            ))}
                        </ul>
                    </div>}
                </div>}
            </div>
        </Fragment>
    )
}

export default BookablesList
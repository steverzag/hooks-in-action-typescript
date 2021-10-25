import { useState } from "react"
import { getUsers } from "../helpers/apiCalls"

const UsersList = () => {

    const users = getUsers()
    const [userIndex, setUserIndex] = useState(0)
    const user = users[userIndex]
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div className="row">
            <div className="col-3">
                <ul>
                    {users.map((user, index) => (
                        <li key={index} className="m-2">
                            <button className="btn btn-primary w-100"
                                onClick={() => setUserIndex(index)}>{user.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
            {user &&
                <div className="col-9">
                    <div>
                        <h2 className="d-inline">{user.name}</h2>
                        <span>
                            <label htmlFor="check-details">Show details</label>
                            <input type="checkbox" name="check-details"
                                onChange={() => setShowDetails(!showDetails)} />
                        </span>
                        <p>{user.title}</p>
                    </div>
                    {showDetails &&
                        <div>
                            <h4>Details</h4>
                            <p>{user.notes}</p>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default UsersList
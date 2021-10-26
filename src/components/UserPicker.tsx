import { useEffect, useState } from "react"
import { getUsers } from "../helpers/apiCalls"
import UsersPage from "../pages/UsersPage"


const UserPicker = () => {

    const users = getUsers()
    const [user, setUser] = useState(users[0])

    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        const u = users.filter(u => u.name === storedUser)[0]
        if(storedUser)
            setUser(u)
    }, [])

    useEffect(() => {
        localStorage.setItem("user", user.name)
    }, [user])

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>){
        
        let u = users.filter(u => u.name === e.target.value)[0]
        setUser(u)
    }
    return (
        <div>
            <select value={user.name} onChange={handleChange}>
                {users.map((value, index) => (

                    <option key={index} value={value.name}>{value.name}</option>
                ))}
            </select>
        </div>
    )
}

export default UserPicker

import {Route} from 'react-router-dom'
//components
import BookablesPage from '../pages/BookablesPage'
import UsersPage from '../pages/UsersPage'
import BookingsPage from '../pages/BookingsPage'

export default function () {
    return (
     <div>
        <Route path="/users" component={UsersPage}></Route>
        <Route path="/bookings" component={BookingsPage}></Route>
        <Route path="/bookables" component={BookablesPage}></Route>
     </div>
    )
}

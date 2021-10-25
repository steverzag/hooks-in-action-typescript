import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, BrowserRouter } from 'react-router-dom'
import { FaCalendar, FaUsers, FaDoorOpen } from 'react-icons/fa'
import Routes from './Routes'

const Nav = () => (
    <header>
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/bookings" className="nav-link"><FaCalendar /><span>Bookings</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link"><FaUsers /><span>Users</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bookables" className="nav-link"><FaDoorOpen /><span>Bookables</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes/>
        </BrowserRouter>
    </header>
)

export default Nav
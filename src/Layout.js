import { Outlet, Link } from "react-router-dom"
export function Layout(){
    return(
        <div className="Navbar">
            <nav className="Navbar">
                <ul className="Navbar">
                    <li className="Navbar">
                        <Link to="/" className="Navbar">Explore National Parks</Link>
                    </li>
                    <li className="Navbar">
                        <Link to="/mysavedparks" className="Navbar">Saved Parks</Link>
                    </li>
                    <li className="Navbar">
                        <Link to="/Account" className="Navbar">Account</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}
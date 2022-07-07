import { Outlet, Link } from "react-router-dom"
export function Layout(){
    return(
        <div class="Navbar">
            <nav class="Navbar">
                <ul class="Navbar">
                    <li class="Navbar">
                        <Link to="/" class="Navbar">Explore National Parks</Link>
                    </li>
                    <li class="Navbar">
                        <Link to="/mysavedparks" class="Navbar">Saved Parks</Link>
                    </li>
                    <li class="Navbar">
                        <Link to="/signin" class="Navbar">Account</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}
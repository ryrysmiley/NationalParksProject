import { Outlet, Link } from "react-router-dom"
export function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Explore National Parks</Link>
                    </li>
                    <li>
                        <Link to="/mysavedparks">Saved Parks</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}
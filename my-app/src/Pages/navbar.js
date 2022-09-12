import { Outlet, Link } from "react-router-dom";

function Nav() {
    return <>
        
        <nav >
            <ul className="ull">
            <li className="li">
                    <Link to="/"  style={{ textDecoration: 'none' }}>Anuj</Link>
                </li>
                
            </ul>
            <ul className="ulr">
                <li className="li">
                    <Link to="/"  style={{ textDecoration: 'none' }}>Home</Link>
                </li>
                <li className="li">
                    <Link to="/about"  style={{ textDecoration: 'none' }}>About</Link>
                </li>
                <li className="li">
                    <Link to="/login"  style={{ textDecoration: 'none' }}>Login</Link>
                </li>
                <li className="li">
                    <Link to="/signup"  style={{ textDecoration: 'none'}}>Register</Link>
                </li>

            </ul>
        </nav>
        
        <Outlet />
    </>

}

export default Nav;
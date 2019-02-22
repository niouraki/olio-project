import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item nav-logo">Olio</li>
                <Link to="/"><li className="nav-item nav-home">Home</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;
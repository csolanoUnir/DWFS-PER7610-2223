import React from 'react'
import "../styles/Navbar.css"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contacto/">Contacto</a>
                </li>
            </ul>
        </nav>
    )
};

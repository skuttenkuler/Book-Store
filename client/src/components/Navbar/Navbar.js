import React from "react";
import './style.css'


export default function Navbar() {
    return(
        <nav className="navbar">
            <a className="navbar-link" href="/home">Home</a>
            <a className="navbar-link" href="/favorites">Favorites</a>
        </nav>
    )
}
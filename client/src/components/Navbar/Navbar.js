import React from "react";



export default function Navbar() {
    return(
        <nav className="navbar">
            <button className="navbar-link" href="/home">Home</button>
            <button className="navbar-link" href="/favorites">Favorites</button>
        </nav>
    )
}
import React from "react";



export function Navbar(homeClick, favClick) {
    return(
        <nav className="navbar">
            <a className="navbar-link" onClick={homeClick}>Home</a>
            <a className="navbar-link" onClick={favClick}>Favorites</a>
        </nav>
    )
}
import React from "react";



export function Navbar(homeClick, favClick) {
    return(
        <nav className="navbar">
            <button className="navbar-link" onClick={homeClick}>Home</button>
            <button className="navbar-link" onClick={favClick}>Favorites</button>
        </nav>
    )
}
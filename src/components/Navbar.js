import React from "react"
import globe from "../images/globe.png";
export default function Navbar() {
    return (
        <nav>
            <img className="navbar-img" src={globe}/>
            <h1>my travel journal.</h1>
        </nav>
    )
}
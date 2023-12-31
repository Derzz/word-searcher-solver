import React from "react";
import '../style/Navbar.css'
import Logo from './Logo'

export default function Navbar() {
    return (
        <nav className="navbar title">
            <a className="navbar-brand" href="./home">
                <Logo/>
            </a>
            <div className="nav navbar-nav">
                <a className="nav-item" href="./home">Home </a>
                <a className="nav-item" href="./about">About </a>
                <a className="nav-item" href="./howitworks">How It Works! </a>
            </div>
        </nav>
    );
}

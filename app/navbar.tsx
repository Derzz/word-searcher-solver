import React from "react";
import './navbar.css'
import Logo from './logo'

export default function Navbar() {
    return (
        <nav className="navbar title">
            <a className="navbar-brand" href="./">
                <Logo/>
            </a>
            <div className="nav navbar-nav">
                <a className="nav-item" href="./">Home </a>
                <a className="nav-item" href="./about">About </a>
                <a className="nav-item" href="./howitworks">How It Works! </a>
            </div>
        </nav>
    );
}

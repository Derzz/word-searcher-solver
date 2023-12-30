import React from "react";
import '../App.css'
import Logo from './logo'

export default function Navbar() {
    return (
        <nav className="navbar title">
            <a className="navbar-brand" href="#">
                <Logo/>
            </a>
            <div className="nav navbar-nav">
                <a className="nav-item nav-link" href="./home">Home </a>
                <a className="nav-item nav-link" href="./about">About </a>
                <a className="nav-item nav-link" href="./howitworks">How it works </a>
            </div>
        </nav>
    );
}

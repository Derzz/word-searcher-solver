import React from "react";
import './navbar.css'
import Logo from './logo'
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar title">
            <Link className="navbar-brand" href="/">
                <Logo/>
            </Link>
            <div className="nav navbar-nav">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/howitworks">How It Works!</Link>
            </div>
        </nav>
    );
}

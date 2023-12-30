import React, {Component, useState} from 'react';
import './style/App.css';
import {Routes, Route, Link} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Howitworks from './pages/Howitworks';


function App() {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/howitworks" element={<Howitworks/>}/>
        </Routes>
    );
}


export default App;

import React, {Component, useState} from 'react';
import solver from './components/solver'
import setUp from './components/solver';
import Grid from './components/grid'
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import About from './About';
import Home from './Home';
import Howitworks from './Howitworks';






function App(){
    return (
        <Routes>
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/howitworks" element={<Howitworks/>} />
        </Routes>
    );
}


export default App;

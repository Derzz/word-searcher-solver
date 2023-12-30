import React, {Component, useState} from 'react';
import solver from '../logic/Solver';
import setUp from '../logic/Solver';
import '../style/App.css';
import {Routes, Route, Link} from "react-router-dom";
import Navbar from '../components/Navbar'

//import waterloo from './university-of-waterloo9207.logowik.com.webp';

function About() {
    return (
        <div className="App">
            <Navbar/>
            <div className="aboutus-body">
                <div className="image">
                    <img src={require("../university-of-waterloo9207.logowik.com.webp")}>

                    </img>
                </div>
                <p>
                    We are the students from university of waterloo......

                </p>

            </div>


        </div>


    );
}

export default About;
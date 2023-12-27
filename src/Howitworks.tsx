import React, {Component, useState} from 'react';
import solver from './components/solver';
import setUp from './components/solver';
import './App.css';
import {Routes,Route,Link} from "react-router-dom";

function Howitworks(){
    return(
        
            
        <div className="title">
                <div>
                    <div className='title-block'>W</div>
                </div>
                <div>
                    <div className='title-block'>O</div>
                </div>
                <div>
                    <div className='title-block'>R</div>
                </div>
                <div>
                    <div className='title-block'>D</div>
                </div>
                <div>
                    <div className='title-block'>S</div>
                </div>
                <div>
                    <div className='title-block'>O</div>
                </div>
                <div>
                    <div className='title-block'>L</div>
                </div>
                <div>
                    <div className='title-block'>V</div>
                </div>
                <div>
                    <div className='title-block'>E</div>
                </div>
                <div>
                    <div className='title-block'>R</div>
                </div>

                <div className="Nav-bar-block">
                    <div>
                        <li className="Nav-bar"> <a href="./home">Home </a> </li>
                    </div>  
                    
                    <div>
                        <li className="Nav-bar"> <a href="./about">About </a> </li>
                    </div>
                    
                    <div>
                        <li className="Nav-bar"> <a href="./howitworks">How it works </a> </li>
                    </div>
                </div> 
            </div>

    );
}

export default Howitworks;
import React, {Component, useState} from 'react';
import solver from './components/solver';
import setUp from './components/solver';
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
//import waterloo from './university-of-waterloo9207.logowik.com.webp';

function About(){
    return(  
        <div className="App">
            
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
            <div className="aboutus-body">
                <div className="image">
                    <img src={require("./university-of-waterloo9207.logowik.com.webp")}>
                                        
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
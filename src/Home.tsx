import React, {Component, useState} from 'react';
import solver from './components/solver';
import setUp from './components/solver';
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Grid from './components/grid'


class Home extends Component{
    state = {
        found: [],
        preview: [''],
        grid: "ATJAA\nABOBA\nAAEMA",
        words: "BOB\nJOE\nTOM",
        error: "",
        clicked: false
    }

    setGrid = (value: string) => {
        this.setState({grid: value});
    }

    setWords = (value: string) => {
        this.setState({words: value});
    }

    checkGrid = (gridString: string, wordString: string) => {
        let temp: Array<string> = gridString.split('\n').map(str => str.trim());
        let compareLength: number = temp[0].length;

        if (compareLength === 0) {
            this.setState({error: "You have provided an empty grid. Please try again."});
            return;
        }

        for (let i = 1; i < temp.length; ++i) {
            if (temp[i].length !== compareLength) {
                this.setState({error: "The grid is not a rectangle. Please try again."});
                console.log("failed!")
                return;
            }
        }
        this.setState({error: "The grid is a rectangle!"});
        setUp(gridString, wordString);
    }


    constructor(props: any) {
        super(props);
        //this.state = { preview: [''] };
    };

    Handleclick = () => {
        //const [splitted,setSplitted]= useState();
        console.log(10);
        var gridstring=(document.getElementById("grid") as HTMLInputElement).value;
        //console.log();
        //setSplitted(gridstring.split("\n")); 
        //console.log(gridstring.split("\n")); 
        console.log(gridstring);  
        
        this.setState({ preview: gridstring.split("\n")});  
        //this.setState({ preview: gridstring});  
        
    }

    render(){
        return(
            <div className="App">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <header className="App-header "> 
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
                                <li className="Nav-bar"> <a href="./home">Home</a> </li>
                            </div>  
                            
                            <div>
                                <li className="Nav-bar"> <a href="./about">About </a> </li>
                            </div>
                            
                            <div>
                                <li className="Nav-bar"> <a href="./howitworks">How it works </a> </li>
                            </div>
                        </div> 
                    </div>
                    
                    <div className="bigblock">
                        <div className="hello">
                            
                            <div className="text-title1">  
                                    Create board &nbsp;           
                                <li className="fa fa-trash"
                                    onClick={() => this.setState({ grid: ""})}></li>
                            </div>
    
                            <textarea 
                                id="grid"
                                className=" w-80 h-64 bg-slate-100 border-solid border-2 bg-right resize-none rounded" 
                                name="Word Searcher Puzzle"
                                cols={40}
                                value={this.state.grid}
                                onChange={e => this.setGrid(e.target.value)}
                                rows={5}/>
    
                            <div className="text-title2"> 
                                Find word
                            </div>
                            <textarea
                                placeholder='enter your word here'
                                className=" w-80 h-36 bg-slate-100 border-solid border-2 bg-right resize-none rounded"
                                name="Words"
                                cols={40}
                                value={this.state.words}
                                onChange={e => this.setWords(e.target.value)}
                                rows={5}/>
    
                            <button 
                                className="button-example" 
                                id={"start"} type={"button"} onClick={() => solver(this.state.grid, this.state.words)}>
                                click me
                            </button>
                        </div>
    
                        <div>
                            <div className="preview-bar"> 
                                Preview
                            </div>
    
                            <div className="preview-backgorund">
                                <div className="preview">
                                    {this.state.preview.map(show => (
                                        <p className='demo'> {show.split('').map(show2 => (
                                            
                                            <div className="preview-small"> {show2} </div>
    
                                        ))} </p>
                                        
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
    
                    <button onClick={this.Handleclick}>
                            hi
                    </button>
    
                    // TODO Add a way to change font color based on color selected
    
                    <h1>
                        {this.state.error}
                    </h1>
                </header>
            </div>
        );

    }
}

export default Home;
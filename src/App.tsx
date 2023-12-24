import React, {Component, useState} from 'react';
import logo from './logo.svg';
import setUp from './components/solver'
import './App.css';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


class App extends Component {
    state = {
        grid: "ATJAA\nABOBA\nAAEMA",
        words: "BOB\nJOE\nTOM",
        error: "",
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
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <textarea
                        name="Word Searcher Puzzle"
                        cols={40}
                        value={this.state.grid}
                        onChange={e => this.setGrid(e.target.value)}
                        rows={5}/>

                    <textarea
                        name="Words"
                        cols={40}
                        value={this.state.words}
                        onChange={e => this.setWords(e.target.value)}
                        rows={5}/>

                    <button id={"start"} type={"button"}
                            onClick={() => this.checkGrid(this.state.grid, this.state.words)}>Click
                        me!
                    </button>

                    <h1>
                        {this.state.error}
                    </h1>
                </header>
            </div>
        );
    }
}


export default App;

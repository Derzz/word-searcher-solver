import React, {Component, useState} from 'react';
import logo from './logo.svg';
import solver from './components/solver'
import './App.css';


class App extends Component {
    state = {
        grid: "",
        words: ""
    }

    setGrid = (value: string) => {
        this.setState({grid: value});
    }

    setWords = (value: string) => {
        this.setState({words: value});
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

                    <button id={"start"} type={"button"} onClick={() => solver(this.state.grid, this.state.words)}>Click
                        me!
                    </button>
                </header>
            </div>
        );
    }
}


export default App;

import React, {Component} from 'react';
import setUp from './components/solver'
import './App.css';


class App extends Component {
    state = {
        preview: [''],
        grid: "ATJAA\nABOBA\nAAEMA",
        words: "BOB\nJOE\nTOM",
        error: ""
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

        var gridstring = (document.getElementById("grid") as HTMLInputElement).value;
        console.log(gridstring);

        this.setState({preview: gridstring.split("\n")});

        setUp(gridString, wordString);
    }


    render() {
        return (
            <div className="App">
                <header className="App-header ">
                    <h1 className="title">
                        Word Solver
                    </h1>
                    <div className="bigblock">
                        <div className="hello">

                            <div className=" h-8 pt-1 w-80 rounded-md text-white bg-cyan-600 text-center align-middle">
                                Create board
                            </div>

                            <textarea
                                id="grid"
                                className=" w-80 h-64 bg-slate-100 border-solid border-2 bg-right resize-none rounded"
                                name="Word Searcher Puzzle"
                                cols={40}
                                value={this.state.grid}
                                onChange={e => this.setGrid(e.target.value)}
                                rows={5}/>

                            <div
                                className=" h-8 pt-1 w-80 rounded-md text-white bg-cyan-600 text-center align-middle mt-4">
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
                                id={"start"} type={"button"}
                                onClick={() => this.checkGrid(this.state.grid, this.state.words)}>
                                click me
                            </button>
                        </div>

                        <div>
                            <div className="preview-bar">
                                Preview
                            </div>

                            <div className="preview-backgorund">
                                <div className="preview">
                                    {this.state.preview.map((show, indexRow) => (
                                        <p className='demo'
                                           id={indexRow.toString()}> {show.split('').map((show2, indexCol) => (
                                            <p id={indexCol.toString()}> {show2} </p>
                                        ))} </p>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>
                        {this.state.error}
                    </h1>
                </header>
            </div>
        );
    }
}


export default App;

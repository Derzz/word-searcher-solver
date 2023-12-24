import React, {Component, useState} from 'react';
import solver from './components/solver'
import './App.css';






class App extends Component {
    state = {
        grid: "",
        words: "",
        preview: ['']
    }

    setGrid = (value: string) => {
        this.setState({grid: value});
    }

    setWords = (value: string) => {
        this.setState({words: value});
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

    render() {
        //var splitted=[''];
        return (
            <div className="App">
                <header className="App-header "> //App-header 
                    <h1 className="text-black-700 text-3xl font-bold">
                        Word Solver
                    </h1>
                    <div className="hello">
                    <textarea 
                        id="grid"
                        className=" w-3/12 ml-2 bg-slate-100 border-solid border-2 bg-right resize-none" 
                        name="Word Searcher Puzzle"
                        cols={40}
                        value={this.state.grid}
                        onChange={e => this.setGrid(e.target.value)}
                        rows={5}/>

                    <textarea
                        className=" w-3/12 ml-2 bg-slate-100 border-solid border-2 bg-right resize-none"
                        name="Words"
                        cols={40}
                        value={this.state.words}
                        onChange={e => this.setWords(e.target.value)}
                        rows={5}/>
                    </div>

                    
                    

                    <button 
                        className="bg-slate-300 rounded w-20" id={"start"} type={"button"} onClick={() => solver(this.state.grid, this.state.words)}>
                        Click me !
                    </button>
                    
                    <button onClick={this.Handleclick}>
                            hi
                        </button>

                    <div className="preview">
                    
                    {this.state.preview.map(show => (
                        <p className='demo'> {show.split('').map(show2 => (
                            <p> {show2} </p>
                            
                        ))} </p>
                        
                    ))}

                    </div>
                    
                </header>
            </div>
        );
    }
}


export default App;

"use client";
import React, {Component} from 'react';
import './home.css';
import Grid from './grid'
import setUp from './solver'
import Textrec from './Text-rec';

export default class Page extends Component {
  state = {
    found: [],
    preview: [''],
    grid: "ATJAA\nABOBA\nAAEMA",
    words: "BOB\nJOE\nTOM",
    error: "",
    clicked: false,
    imageButton: false,
  }

  setGrid = (value: string) => {
    this.setState({grid: value});
  }

  setWords = (value: string) => {
    this.setState({words: value});
  }

  setImageButton = () =>{
    this.setState({imageButton: !this.state.imageButton});
  }

  checkGrid = (gridString: string, wordString: string) => {
    let temp: Array<string> = gridString.split('\n').map(str => str.trim());
    console.log(temp[temp.length - 1]);
    if(temp[temp.length - 1] == ''){
      temp.pop();
    }
    if(wordString[wordString.length - 1] == '\n'){
      wordString = wordString.slice(0, -1);
    }
    for(let i = 0; i < temp.length; ++i){
      if(temp[i] == ''){
        this.setState({error: "There is a gap in the grid. Please try again."});
        return;
      }
    }

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
    let gridstring = (document.getElementById("grid") as HTMLInputElement).value;
    console.log(gridstring);

    this.setState({preview: temp});

    this.setState({found: setUp(gridString, wordString)});
    this.setState({error: ""});
    this.setState({clicked: true});
  }

  render() {
    return (
        <div className="App">
          <div className="container-fluid">
            <div className="input">
              <div className="text-title1">
                Create board &nbsp;
                <li className="fa fa-trash"
                    onClick={() => this.setState({grid: ""})}></li>
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
                List of Words to Find
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
                  className={"home-button"} id={"start"} type={"button"}
                  onClick={() => this.checkGrid(this.state.grid, this.state.words)}>
                Solve!
              </button>

              <button className={"home-button"} id={"imageButton"} type={"button"}
                      onClick={() => this.setImageButton()}> Upload Image</button>
              {this.state.imageButton ? (
                  <Textrec setImageButton={() => this.setImageButton()} setGrid={(x: string) => this.setGrid(x)} setError={(x: string) => this.setState({error: x})}/>
              ) : null}

            </div>

            <div className="preview">
              <div id="previewItems">
                <div className="preview-bar">
                  Preview
                </div>
                {this.state.error.length !== 0 ? this.state.error:  <Grid preview={this.state.preview} found={this.state.found}/>}

              </div>
            </div>
          </div>
        </div>

    );
  }
}
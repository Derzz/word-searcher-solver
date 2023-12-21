import React, {Component, useState} from 'react';
import logo from './logo.svg';
import solver from './components/solver'
import './App.css';


class App extends Component {
    state = {
        phrase: ""
    }

    setPhrase = (value: string) => {
        this.setState({phrase: value});
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
                        name="Text1"
                        cols={40}
                        value={this.state.phrase}
                        onChange={e => this.setPhrase(e.target.value)}
                        rows={5}/>
                    <button id={'start'} type={'button'}>Click me!</button>
                </header>
            </div>
        );
    }
}


export default App;

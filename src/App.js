import React, { Component } from 'react';
//import FirstComponent from './components/learning-examples/FirstComponent.jsx'
//import SecondComponent from './components/learning-examples/SecondComponent'
//import ThirdComponent from './components/learning-examples/ThirdComponent'
//import Counter from './components/counter/Counter'
import Menu from './components/base-layout/menu'
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import { trackPromise } from 'react-promise-tracker';

function App() {
  return(
    <div className="App">
      {/*<Counter />*/}
      <Menu/>
    </div>
  );

}

/*
class LearningComponents extends Component{
  render(){
    return (
      <div className="LearningComponents">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
        </header>
      </div>
    );
  }
}
*/

export default App;

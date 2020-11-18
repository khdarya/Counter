import React from 'react';
import './App.css';
import {CountValueContainer} from './Counter/CountValueCountainer';
import {LeftDisplayContainer} from "./Counter/LeftDisplay/LeftDispalyContainer";

const App = () => {

    return (
        <div className="App">
            <CountValueContainer />
            <LeftDisplayContainer />
        </div>
    );
}

export default App;

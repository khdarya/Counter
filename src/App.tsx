import React, {useState} from 'react';
import './App.module.css';
import Component from "./Component";

function App() {

    let [value, setValue] = useState(0);

    const [startValue, setStartValue] = useState(0);

    let fiveValue = 5
  /*  let [maxValue, setMaxValue] = useState(1);

    let maxValueFunc = () => {
        setMaxValue(maxValue + 1);
    }*/
    let incFunction = () => {
        if(fiveValue === value) {
            return
        }
        setValue(value + 1)

    }
    let resetFunction = () => setValue(0)

    return (
        <div className="App">
            <Component
                value={value}
                incFunction={incFunction}
                fiveValue={fiveValue}
                resetFunction={resetFunction}

            />
        </div>
    )
}

export default App;

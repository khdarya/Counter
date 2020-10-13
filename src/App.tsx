import React, {useState} from 'react';
import './App.module.css';
import Component from "./Component";
import DisplayLeft from "./DisplayLeft";

function App() {

    let [value, setValue] = useState<any>(0);

    const [maxValue, setMaxValue] = useState(5);
    const [startValue, setStartValue] = useState(0);

    // const [maxValue, setMaxValue] = useState(Number(localStorage.getItem('maxValue')));
    // const [startValue, setStartValue] = useState(Number(localStorage.getItem('startValue')));

    const setCounterText = () => {
            setValue('Valid value')
    }

    const getStartValue = (startValue: number) => {
        setStartValue(startValue)
    }
    const getMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
    }

    const setCountValue = () => {
        setValue(startValue)
    }

    let incFunction = () => {
        if (maxValue === value) {
            return
        }
        setValue(value + 1)

    }
    let resetFunction = () => setValue( value = 0)

    return (
        <div className="App">
            <Component
                value={value}
                incFunction={incFunction}
                maxValue={maxValue}
                resetFunction={resetFunction}
                startValue={startValue}
            />
            <DisplayLeft
                getStartValue={getStartValue}
                getMaxValue={getMaxValue}
                setCountValue={setCountValue}
                startValue={startValue}
                maxValue={maxValue}
                setCounterText={setCounterText}

            />
        </div>
    )
}

export default App;

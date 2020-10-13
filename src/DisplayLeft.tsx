import React, {ChangeEvent, useState} from 'react';
import './DisplayLeft.css';
import style from './App.module.css';

type DisplayLeftType = {
    getStartValue: (value: number) => void
    getMaxValue: (value: number) => void
    setCountValue: () => void
    startValue: number
    maxValue: number
    setCounterText: () => void
}

export const DisplayLeft = (props: DisplayLeftType) => {

    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    const getStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value));
        props.getStartValue(Number(e.currentTarget.value));
        props.setCounterText();
    }
    const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value));
        props.getMaxValue(maxValue);
        props.setCounterText();
    }

    let classForStartValueInput = startValue < 0 || startValue >= maxValue ? 'error' : '';
    let classForMaxValueInput = maxValue < 0 || startValue >= maxValue ? 'error' : '';
    const disableBtn = startValue < 0 || startValue >= maxValue;

    return (
        <div className={style.appWrapper}>
            <div className={style.common}>
            <div>
                Max Value
                <input className={classForMaxValueInput} type={'number'} value={props.maxValue} onChange={getMaxValue}/>
            </div>
            <div>
                Start Value
                <input className={classForStartValueInput} type={'number'} value={props.startValue} onChange={getStartValue}/>
            </div>
            <button disabled={disableBtn} onClick={props.setCountValue}>Set</button>
            </div>
    </div>
    )
}

export default DisplayLeft;

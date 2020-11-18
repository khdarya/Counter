import React from 'react'
import s from './Display.module.css'

type DisplayPropsType = {
    currentValue: number
    maxValue: number
    startValue: number
    newMaxValue: number
    newStartValue: number
}

function Display(props: DisplayPropsType) {

    if(props.newStartValue < 0 ||
        props.newMaxValue < 0 ||
        props.newStartValue >= props.newMaxValue) {
        return <div className={`${s.display}`} style={{color: 'red'}}>Incorrect value!</div>
    }
    if(props.newStartValue !== props.startValue || props.newMaxValue !== props.maxValue) {
        return <div className={`${s.display}`} style={{color: 'mediumblue', textAlign: 'center'}}>Enter values and press 'set'</div>
    }

    return (
        <div className={`${s.display} ${props.currentValue === props.maxValue ? s.maxCount : ''}`}>
            {props.currentValue}
        </div>
    )
}

export default Display;
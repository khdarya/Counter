import React from 'react';
import style from "./App.module.css";

type PropsType = {
    value: any
    startValue: number
    maxValue: number
}

export const CountValue = (props: PropsType) => {
    return (
        <div className={style.valueStyle}>
        <p className={props.value === props.maxValue ? style.error : style.valueStyle}>
            {props.startValue < 0 || props.startValue >= props.maxValue ? 'Error' : props.value}</p>
        </div>
    )
}
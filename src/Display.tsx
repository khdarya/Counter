import React from 'react';
import style from './App.module.css';


export type DisplayType = {
    value: number
    fiveValue: number

}

function Display(props: DisplayType) {


    return (

            <div className={style.valueStyle}> <span
                className={props.value === props.fiveValue ? style.error : style.valueStyle}>
                {props.value} </span></div>

    )
}

export default Display;


import React from 'react';
import style from './App.module.css';

export type ButtonType = {

    incFunction: () => void
    resetFunction: () => void
    fiveValue: number
    value: number
}


function Button(props: ButtonType) {

return (
    <div className={style.buttonStyle}>

        <button disabled={props.value === props.fiveValue} onClick={props.incFunction} className={style.incStyle}> INC </button>

        <button disabled={props.value === 0} onClick={props.resetFunction} className={style.resetStyle}> RESET </button>



    </div>
)
}

export default Button;
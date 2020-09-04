import React from 'react';
import style from './App.module.css';
import Button from "./Button";
import {CountValue} from "./CountValue";


export type ComponentType = {
    value: number
    incFunction: () => void
    maxValue: number
    resetFunction: () => void
    startValue: number
}

function Component(props: ComponentType) {

    return (
        <div>
            <div className={style.appWrapper}>

                <CountValue value={props.value} maxValue={props.maxValue} startValue={props.startValue} />

                <Button incFunction={props.incFunction}
                        resetFunction={props.resetFunction}
                        maxValue={props.maxValue}
                        value={props.value}
                />
            </div>
        </div>
    )
}

export default Component;


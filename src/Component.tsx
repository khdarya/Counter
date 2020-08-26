import React from 'react';
import style from './App.module.css';
import Display from "./Display";
import Button from "./Button";


export type ComponentType = {
    value: number
    incFunction: () => void
fiveValue: number
    resetFunction: () => void

}

function Component(props: ComponentType) {


    return (
<div className={style.appWrapper}>

        <div className={style.appWrapper}>

            <Display value={props.value} fiveValue={props.fiveValue} />

                <Button  incFunction={props.incFunction}
                         resetFunction={props.resetFunction}
                         fiveValue={props.fiveValue}
                         value={props.value}
                />

        </div>
</div>
    )
}

export default Component;


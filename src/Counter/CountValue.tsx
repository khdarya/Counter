import React from 'react'
import s from './Counter.module.css'
import Display from './Display/Display';
import Button from './Button/Button';

type CountValuePropsType = {
    currentValue: number
    maxValue: number
    startValue: number
    newMaxValue: number
    newStartValue: number
    incCount: () => void
    resCount: () => void
}

export const CountValue = (props: CountValuePropsType) => {

    return (
        <div className={s.counterBlock}>
            <div className={s.display}>
                <Display currentValue={props.currentValue} maxValue={props.maxValue} startValue={props.startValue}
                         newMaxValue={props.newMaxValue} newStartValue={props.newStartValue}/>
            </div>
            <div className={s.buttonsPanel}>
                <Button title={'inc'} callBack={props.incCount} disabled={props.currentValue === props.maxValue}/>
                <Button title={'reset'} callBack={props.resCount} disabled={props.currentValue === props.startValue}/>
            </div>
        </div>
    )
}
import React from 'react';
import LeftDisplay from './LeftDisplay';
import Button from '../Button/Button';
import s from './Left.module.css'


type LeftPropsType = {
    newMaxValue: number
    newStartValue: number
    maxValueChange: (maxValue: number) => void
    startValueChange: (startValue: number) => void
    setCustomization: () => void
}

function Left(props: LeftPropsType) {

    return (
        <div className={s.customisationBlock}>
            <LeftDisplay newMaxValue={props.newMaxValue} newStartValue={props.newStartValue}
                         maxValueChange={props.maxValueChange}
                         startValueChange={props.startValueChange}/>
            <Button title={'set'} callBack={props.setCustomization} disabled={
                props.newStartValue < 0
                || props.newMaxValue < 0
                || props.newStartValue >= props.newMaxValue}/>
        </div>
    )
}

export default Left;
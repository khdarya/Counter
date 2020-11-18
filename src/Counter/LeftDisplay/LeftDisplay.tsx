import React, {ChangeEvent} from 'react';
import s from './Left.module.css'

type LeftDisplayPropsType = {
    newMaxValue: number
    newStartValue: number
    maxValueChange: (newMaxValue: number) => void
    startValueChange: (newStartValue: number) => void
}

function LeftDisplay(props: LeftDisplayPropsType) {

    let onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueChange(Number(e.currentTarget.value));
    }

    let onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueChange(Number(e.currentTarget.value));
    }

    return (
        <div className={s.customisationDisplay}>
            <div>
                <label>max value<input
                    className={`${props.newMaxValue < 0 || props.newMaxValue === props.newStartValue ||
                    props.newMaxValue < props.newStartValue ? s.incorrect : ''}`}
                    type='number' value={props.newMaxValue}
                    onChange={onMaxValueChange}/>
                </label>
            </div>
            <div>
                <label>start value<input
                    className={`${props.newStartValue < 0 || props.newMaxValue === props.newStartValue ||
                    props.newMaxValue < props.newStartValue ? s.incorrect : ''}`}
                    type='number' value={props.newStartValue}
                    onChange={onStartValueChange}/></label>
            </div>
        </div>
    )
}

export default LeftDisplay;
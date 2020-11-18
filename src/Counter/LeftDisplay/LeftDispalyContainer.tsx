import React from 'react';
import Left from './Left';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {InitStateType, setCustom, setNewMaxValue, setNewStartValue} from '../../state/counter-reducer';


export const LeftDisplayContainer = () => {

    let dispatch = useDispatch()

    let counter = useSelector<AppRootStateType, InitStateType>(state => state.counter)

    let maxValueChange = (newMaxValue: number) => {
        dispatch(setNewMaxValue(newMaxValue))
    }

    let startValueChange = (newStartValue: number) => {
        dispatch(setNewStartValue(newStartValue))
    }

    let onButtonSetCustomClick = () => {
        dispatch(setCustom())
    }

    return (
        <Left newMaxValue={counter.newMaxValue}
              newStartValue={counter.newStartValue}
              maxValueChange={maxValueChange}
              startValueChange={startValueChange}
              setCustomization={onButtonSetCustomClick}/>
    )
}
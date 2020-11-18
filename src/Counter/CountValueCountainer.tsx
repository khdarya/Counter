import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../state/store';
import {CountValue} from './CountValue';
import {incrementCount, InitStateType, resetCount} from '../state/counter-reducer';


export const CountValueContainer = () => {

    let dispatch = useDispatch()
    let counter = useSelector<AppRootStateType, InitStateType>(state => state.counter)

    let incCount = () => {
        dispatch(incrementCount())
    }

    let resCount = () => {
        dispatch(resetCount())
    }

    return (
        <CountValue currentValue={counter.currentValue}
                 maxValue={counter.maxValue}
                 startValue={counter.startValue}
                 newMaxValue={counter.newMaxValue}
                 newStartValue={counter.newStartValue}
                 incCount={incCount}
                 resCount={resCount}
        />
    )
}
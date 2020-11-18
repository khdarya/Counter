export type InitStateType = {
    startValue: number
    maxValue: number
    currentValue: number
    newStartValue: number
    newMaxValue: number
}

const InitialState: InitStateType = {
    startValue: 0,
    maxValue: 5,
    currentValue: 0,
    newStartValue: 0,
    newMaxValue: 5
}

export const counterReducer = (state: InitStateType = InitialState, action: any): InitStateType => {
    switch (action.type) {
        case 'INCREMENT_COUNT': {
            let stateCopy = {...state}
            let newCurrentValue = stateCopy.currentValue
            newCurrentValue++
            stateCopy.currentValue = newCurrentValue
            return stateCopy
        }
        case 'RESET_COUNT': {
            let stateCopy = {...state}
            return {...stateCopy, currentValue: stateCopy.startValue}
        }
        case 'MAX_VALUE_CHANGE': {
            return {...state, newMaxValue: action.newMaxValue}
        }
        case 'START_VALUE_CHANGE': {
            return {...state, newStartValue: action.newStartValue}
        }
        case 'SET_CUSTOM': {
            let stateCopy = {...state}
            return {...stateCopy,
                startValue: stateCopy.newStartValue,
                maxValue: stateCopy.newMaxValue,
                currentValue: stateCopy.newStartValue}
        }
        default:
            return state
    }
}

export const incrementCount = () => {
    return {type: 'INCREMENT_COUNT'}
}
export const resetCount = () => {
    return {type: 'RESET_COUNT'}
}
export const setNewMaxValue = (newMaxValue: number) => {
    return {type: 'MAX_VALUE_CHANGE', newMaxValue}
}
export const setNewStartValue = (newStartValue: number) => {
    return {type: 'START_VALUE_CHANGE', newStartValue}
}
export const setCustom = () => {
    return {type: 'SET_CUSTOM'}
}
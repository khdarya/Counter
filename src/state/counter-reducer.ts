type initialStateType = {
    maxValue: number
    startValue: number
}

type incFunctionType = {
    type: 'INCREMENT-VALUE'
}
type resetFunctionType = {
    type: 'RESET-VALUE'
}

type ActionsType = incFunctionType | resetFunctionType

const initialState = {
    maxValue: 0,
    startValue: 0
}


export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {


        default:
            throw new Error("no action type")
    }
}
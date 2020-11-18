import React from 'react';
import style from './Button.module.css'

export type ButtonPropsType = {

    title: 'inc' | 'reset' | 'set'
    callBack: () => void
    disabled?: boolean
}


function Button(props: ButtonPropsType) {

return (
    <button className={style.button} onClick={props.callBack} disabled={props.disabled}>
        {props.title}
    </button>
)
}

export default Button;
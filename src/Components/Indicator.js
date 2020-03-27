import React from 'react';
import style from './Component.module.scss'

export const Indicator = (props) => {
    return(
        <div className={style.indicator}>{props.message}</div>
    )
};
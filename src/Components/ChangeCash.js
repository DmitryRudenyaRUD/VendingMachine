import React from 'react';
import style from './Component.module.scss';

export const ChangeCash = (props) => {

    return <div className={style.changeCash}>{
        props.change.map( item => (
            <p key={item}>{item}</p>
        ))
    }</div>
};

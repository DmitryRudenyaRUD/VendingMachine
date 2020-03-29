import React from 'react';
import style from './Component.module.scss'

export const Indicator = (props) => {

    const arrayLetters = props.message.split('');

    return arrayLetters.length > 23 ? (
            <div className={style.indicator}>{props.message}</div>
        )
        :
        (
            <div className={style.indicator}>{
                arrayLetters.map((item, ind) =>
                    item === ' ' ? <div className={style.emptyLetter} key={ind}/> : (
                        <span
                            key={ind}
                            className={style[`letter${ind}`]}
                        >{item}</span>
                    ))
            }</div>
        )
};
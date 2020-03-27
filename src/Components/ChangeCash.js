import React from 'react';
import style from './Component.module.scss';
import PropTypes from "prop-types";
import {prices} from '../Reducers/products'

export const ChangeCash = (props) => {
    const {money} = props.indicator_1;
    const {message_2} = props.indicator_2;
    const {input__2} = props.enterText;

    const cash = () => {
        if(message_2 !== 'Success!') return;

        const ten = Math.floor((money - prices[input__2]) / 10);
        const five = (money - prices[input__2]) % 10 !== 0 ? 1 : null;

        const stringTen = ten ? (
            <>
                <p>{'10 R:'}</p>
                <p>{`${ten} coins`}</p>
            </>
        ) : null;
        const stringFive = five ? (
            <>
                <p>{'5 R:'}</p>
                <p>{`${five} coins`}</p>
            </>
        ) : null;
        const result = !stringTen && !stringFive ? 'No change.'
            : (
                <>
                    {stringFive}
                    <div className={style.emptyLine}/>
                    {stringTen}
                </>
            );
        return (result)
    };

    return <div className={style.changeCash}>{cash()}</div>
};

ChangeCash.propTypes = {
    indicator_1: PropTypes.object,
    indicator_2: PropTypes.object,
    enterText: PropTypes.object,
};
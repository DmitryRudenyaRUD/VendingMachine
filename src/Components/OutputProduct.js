import React from 'react';
import style from './Component.module.scss';
import PropTypes from "prop-types";

export const OutputProduct = (props) => {
    const {message_2} = props.indicator_2;
    const {input__2} = props.enterText;
    const products = props.products;

    const purchase = () => {
        if(message_2 === 'Success!') {
            const {title, descriptor, coast} = products[input__2 - 1];
            return (
                <div
                    className={style.purchase}
                    onClick={() => {props.end(); props.reset()}}
                >
                    <p className={style.title}>{ title }</p>
                    <p className={style.descriptor}>{ descriptor }</p>
                    <span>{`${coast} R`}</span>
                </div>
            )
        }
    };

    return (
        <div className={style.outputProduct}>{purchase()}</div>
    )
};

OutputProduct.propTypes = {
    products: PropTypes.array,
    indicator_2: PropTypes.object,
    enterText: PropTypes.object,
};
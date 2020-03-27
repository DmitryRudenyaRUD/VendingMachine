import React from 'react';
import style from './Component.module.scss'
import PropTypes from "prop-types";

export const OutputIndicator = (props) => {
    const {message_2} = props.indicator_2;

    const message = () => {
        if(message_2 === 'Success!') {
            return 'Take your product and change!'
        } else return '.'
    };

    return(
        <div className={style.indicator}>{message()}</div>
    )
};

OutputIndicator.propTypes = {
    indicator_2: PropTypes.object
};
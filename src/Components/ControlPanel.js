import React from 'react';
import {Indicator} from './Indicator';
import {InputContainer} from './InputContainer';
import {
    ReleaseContainer,
    ContainerOutputIndicator,
    ContainerChangeCash} from "../Containers";
import style from './Component.module.scss';
import PropTypes from "prop-types";

export const ControlPanel = (props) => {
    const {message_1, money} = props.indicator_1;
    const {message_2} = props.indicator_2;
    const {input__1, input__2} = props.enterText;

    const isDisabledInput = (id) => {
        return (id === 1 && money >= 600) ?
            true : (id === 1 && message_2 === 'Success!') ?
                true : (id === 2 && money < 100) ?
                    true : (id === 2 && message_2 === 'Success!') ?
                        true : null
    };

    return (
        <div className={style.controlPanel}>
            <Indicator message={message_1}/>
            <InputContainer
                id={1}
                isDisabled={isDisabledInput(1)}
                onChange={props.onChange}
                onSubmit={props.onSubmit}
                value={input__1}
            />
            <div className={style.information}>
                <p>Available banknotes: 50, 100,</p>
                <p>200, 500 or 1000 R.</p>
                <p>The machine gives change</p>
                <p>in 1, 2, 5 and 10 R coins.</p>
            </div>
            <Indicator message={message_2}/>
            <InputContainer
                id={2}
                isDisabled={isDisabledInput(2)}
                onChange={props.onChange}
                onSubmit={props.onSubmit}
                money={money}
                value={input__2}
            />
            <div className={style.empty}/>
            <ContainerOutputIndicator />
            <div className={style.output}>
                <ContainerChangeCash />
                <ReleaseContainer />
            </div>
        </div>
    )
};
ControlPanel.propTypes = {
    indicator_1: PropTypes.object,
    indicator_2: PropTypes.object,
    enterText: PropTypes.object,
};
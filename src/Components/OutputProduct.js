import React from 'react';
import style from './Component.module.scss';

export const OutputProduct = (props) => {

    if(Object.keys(props.output).length === 0) {
        return <div className={style.outputProduct}/>
    }

    const {title, descriptor, coast, purchase} = props.output;

    return (
        <div className={style.outputProduct}>
            <div
                className={style.purchase}
                onClick={() => {
                    props.end();
                    props.reset()
                }}
            >
                <p className={style.title}>{title}</p>
                <p className={style.descriptor}>{descriptor}</p>
                <span>{`${coast} R`}</span>
                <span className={style.id}>{purchase}</span>
            </div>
        </div>
    )
};


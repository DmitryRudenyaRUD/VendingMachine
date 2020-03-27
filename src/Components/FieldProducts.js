import React from 'react';
import style from './Component.module.scss';
import PropTypes from 'prop-types';

export const FieldProducts = (props) => {

    const { money } = props.indicator_1;

    const handlerClass = (id, coast) => {
        switch(id) {
            case 1:
                return money >= coast ? style.coast__action : null;
            case 2:
                return money >= coast ? style.id__action : style.id;
            default:
                return
        }
    };

    return (
        <div className={style.showcase}>
            <div className={style.showcase__body}>
                <ul className={style.list}>{
                    props.products.map(({ title, descriptor, coast }, ind) => (
                        <li className={style[`field${ind + 1}`]}  key={ ind }>
                            <p className={style.title}>{ title }</p>
                            <p className={style.descriptor}>{ descriptor }</p>
                            <span
                                className={handlerClass(1, coast)}
                            >{`${coast} R`}</span>
                            <span
                                className={handlerClass(2, coast)}
                            >{ ind + 1 }</span>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
};

FieldProducts.propTypes = {
    products: PropTypes.array,
    indicator_1: PropTypes.object
};

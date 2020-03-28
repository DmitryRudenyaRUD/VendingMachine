import {connect} from 'react-redux';
import {FieldProducts} from './Components/FieldProducts';
import {ControlPanel} from './Components/ControlPanel';
import {OutputProduct} from './Components/OutputProduct';
import {OutputIndicator} from './Components/OutputIndicator';
import {ChangeCash} from './Components/ChangeCash';
import {
    actionInputValue,
    actionInsert,
    actionRestore,
    actionEnd,
    actionReset
} from './Actions/actions';

export const Showcase = connect(
    state => ({
        products: state.products,
        indicator_1: state.indicator_1,
    })
)(FieldProducts);

export const ContainerControlPanel = connect(
    state => (
        {
            indicator_1: state.indicator_1,
            indicator_2: state.indicator_2,
            indicator_3: state.indicator_3,
            enterText: state.enterText,
        }),
    dispatch => ({
        onChange(name, text) {
            dispatch(actionInputValue(name, text))
        },
        onSubmit(name, text, money) {
            dispatch(actionInsert(name, text, money))
        },
        mapDispatchToRestore() {
            dispatch(actionRestore())
        }
    })
)(ControlPanel);

export const ContainerOutputIndicator = connect(
    state => ({
        indicator_2: state.indicator_2,
    })
)(OutputIndicator);

export const ContainerChangeCash = connect(
    state => ({
        indicator_1: state.indicator_1,
        indicator_2: state.indicator_2,
        enterText: state.enterText,
    })
)(ChangeCash);

export const ReleaseContainer = connect(
    state => ({
        products: state.products,
        indicator_2: state.indicator_2,
        enterText: state.enterText,
    }),
    dispatch => ({
        end() {
            dispatch(actionEnd())
        },
        reset() {
            dispatch(actionReset())
        }
    })
)(OutputProduct);



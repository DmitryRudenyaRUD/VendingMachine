import {connect} from 'react-redux';
import {FieldProducts} from './Components/FieldProducts';
import {ControlPanel} from './Components/ControlPanel';
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
            change: state.change,
            output: state.output
        }),
    dispatch => ({
        onChange(name, text) {
            dispatch(actionInputValue(name, text))
        },
        onSubmit(name, text) {
            dispatch(actionInsert(name, text))
        },
        mapDispatchToRestore() {
            dispatch(actionRestore())
        },
        end() {
            dispatch(actionEnd())
        },
        reset() {
            dispatch(actionReset())
        }
    })
)(ControlPanel);




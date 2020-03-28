import C from '../constants';

export const actionInputValue = (name, text) => {
    switch (name) {
        case 1:
            return ({
                type: C.ENTER_INPUT_1,
                payload: text
            });
        case 2:
            return ({
                type: C.ENTER_INPUT_2,
                payload: text
            });
        default:
            return
    }
};

export const actionInsert = (name, text, money) => {
    switch (name) {
        case 1:
            return ({
                type: C.INSERT_MONEY,
                payload: text,
            });
        case 2:
            return ({
                type: C.CHOOSE_PRODUCT,
                payload: text,
                money
            });

        default:
            return
    }
};

export const actionRestore = () => {
    return dispatch => (
        setTimeout(() => (
            dispatch({ type: C.RESTORE_DEFAULT_VALUE })
        ), 1000)
    )
};

export const actionEnd = () => {
    return dispatch => (
        setTimeout(() => (
            dispatch({ type: C.END })
        ), 300)
    )
};

export const actionReset = () => {
    return dispatch => (
        setTimeout(() => (
            dispatch({ type: C.RESET })
        ), 1500)
    )
};
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

export const actionInsert = (name, text) => {
    switch (name) {
        case 1:
            return ({
                type: C.INSERT_MONEY,
                payload: text,
            });
        case 2:
            return async (dispatch, getState) => {
                await dispatch({
                    type: C.CHOOSE_PRODUCT,
                    payload: text,
                    money: getState().indicator_1.money
                });

                if(getState().indicator_2.message_2 === 'Success!' ) {
                    dispatch({
                        type: C.PRODUCT_WAS_SELECTED,
                        money: getState().indicator_1.money,
                        purchase: getState().enterText.input__2,
                        products: getState().products
                    })
                }
            };

        default:
            return
    }
};

export const actionRestore = () => {
    return dispatch => (
        setTimeout(() => (
            dispatch({type: C.RESTORE_DEFAULT_VALUE})
        ), 1000)
    )
};

export const actionEnd = () => {
    return dispatch => (
        setTimeout(() => (
            dispatch({type: C.END})
        ), 300)
    )
};

export const actionReset = () => {
    return dispatch => (
        setTimeout(() => (
            dispatch({type: C.RESET})
        ), 3000)
    )
};
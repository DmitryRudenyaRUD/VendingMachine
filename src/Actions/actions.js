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
            })
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
        case 3:
            return ({
                type: C.RESTORE_DEFAULT_VALUE,
                payload: text
            })
    }
};


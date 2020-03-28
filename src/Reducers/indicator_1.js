import C from '../constants';

const initialState = {
    message_1: 'Insert banknotes...',
    money: 0
};

export const indicator_1 = (state = initialState, action) => {
    const money = action.payload;

    switch (action.type) {
        case C.INSERT_MONEY:
            if(isNaN(money)) {
                return {
                    ...state,
                    message_1: 'Banknote must be a number!',
                }
            } else if([50, 100, 200, 500, 1000].find(i => i === +money)) {
                if(+money + state.money >= 600) {
                    return {
                        message_1: `Inserted money: ${state.money + +money} R. Enough for any product.`,
                        money: +money + state.money
                    }
                } else {
                    return {
                        message_1: `Inserted money: ${state.money + +money} R`,
                        money: +money + state.money
                    }
                }
            } else {
                return {
                    ...state,
                    message_1: 'Unknown banknote!'
                }
            }

        case C.RESTORE_DEFAULT_VALUE:
            return state.money > 0 && state.money < 600 ?
                { ...state, message_1: `Inserted money: ${state.money} R` }
            :
                   state.money > 0 && state.money >= 600 ?
                { ...state, message_1: `Inserted money: ${state.money} R. Enough for any product.`, }
            :
                       {...state, message_1: 'Insert banknotes...'};
            case C.END:
                return initialState;
        default:
            return state
    }
};

import C from '../constants';
import {prices} from './products';

const initialState = {
    message_2: '.'
};

export const indicator_2 = (state = initialState, action) => {
    const text = action.payload;

    switch (action.type) {
        case C.INSERT_MONEY:
            if(isFinite(text) && [100, 200, 500, 1000].find(i => i === +text)) {
               return {message_2: 'Choose product...'}
            } else return state;

        case C.CHOOSE_PRODUCT:
            if(isNaN(text)) {
                return {message_2: 'Choice must be a number!'}
            } else if ( [...Array(8).keys()].find(i => i === +text) ) {

                return prices[text] <= action.money ?
                    {message_2: 'Success!'} :
                    {message_2: 'Not enough money!'}

            } else return {message_2: 'Enter the correct number!'};

        case C.RESTORE_DEFAULT_VALUE:
            if(state.message_2 === '.') {
                return {message_2: '.'}
            } else if(state.message_2 !== 'Success!') {
                return {message_2: 'Choose product...'}
            } else return state;

        case C.END:
            return {message_2: 'Thank you!'};

        case C.RESET:
            return initialState;

        default: return state
    }
};

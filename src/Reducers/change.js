import C from '../constants';
import {prices} from './products';

export const change = (state = [], action) => {

    switch (action.type) {
        case C.PRODUCT_WAS_SELECTED:
            const {money, purchase} = action;
            const ten = Math.floor((money - prices[purchase]) / 10);
            const five = (money - prices[purchase]) % 10 !== 0 ? 1 : null;

            return !ten && !five ? ['No change.'] :
                ten && five? ['5 R:', `${five} coins`, ' ', '10 R:', `${ten} coins`] :
                    ten ? ['10 R:', `${ten} coins`] :
                        five ? ['5 R:', `${five} coins`] : null;

        case C.END:
            return [];

        default:
            return state
    }
};

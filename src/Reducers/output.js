import C from '../constants';

export const output = (state = {}, action) => {

    switch (action.type) {
        case C.PRODUCT_WAS_SELECTED:
            const {purchase, products} = action;
            const {title, descriptor, coast} = products[purchase - 1];

            return {title, descriptor, coast, purchase};

        case C.END:
            return {};

        default:
            return state
    }
};
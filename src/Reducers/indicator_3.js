import C from '../constants';

const initialState = {
    message_3: '.'
};

export const indicator_3 = (state = initialState, action) => {

    switch (action.type) {

        case C.PRODUCT_WAS_SELECTED:
            return { message_3:'Take your product and change!' };

        case C.END:
            return { message_3: 'Thank you!' };

        case C.RESET:
            return initialState;

        default:
            return state
    }
};
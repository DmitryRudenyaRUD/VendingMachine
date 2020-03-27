import C from '../constants';

const initialState = {
    input__1: '',
    input__2: '',
};

export const enterText = (state = initialState, action) => {
    switch (action.type) {
        case C.ENTER_INPUT_1:
            return (
                {
                    ...state,
                    input__1: action.payload
                }
            );
        case C.ENTER_INPUT_2:
            return (
                {
                    ...state,
                    input__2: action.payload
                }
            );
        default:
            return state
    }
};
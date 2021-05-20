import { GET_FAQ, LOGIN } from '../actions/allActions';

const initialState = {
    faqs: [],
};

const allReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN: {
            return {
                ...state,
                accessCode: payload,
            };
        }
        case GET_FAQ: {
            return {
                ...state,
                faqs: payload,
            };
        }
        default:
            return state;
    }
};

export default allReducer;

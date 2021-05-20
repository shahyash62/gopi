import { CREATE_FAQ, DELETE_FAQ, GET_FAQ, LOGIN, SAVE_FAQ } from '../actions/allActions';

const initialState = {
    faqs: [],
};

const allReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN: {
            return {
                ...state,
                accessToken: payload,
            };
        }
        case GET_FAQ: {
            return {
                ...state,
                faqs: payload,
            };
        }
        case SAVE_FAQ: {
            const newFaqs = [...state.faqs];
            for (let index = 0; index < state.faqs.length; index += 1) {
                if (state.faqs[index]._id === payload._id) {
                    newFaqs[index] = payload;
                    break;
                }
            }
            return {
                ...state,
                faqs: newFaqs,
            };
        }
        case DELETE_FAQ: {
            const newFaqs = state.faqs.filter((faq) => faq._id !== payload);
            return {
                ...state,
                faqs: newFaqs,
            };
        }
        case CREATE_FAQ: {
            const newFaqs = [...state.faqs];
            newFaqs.push(payload);
            return {
                ...state,
                faqs: newFaqs,
            };
        }
        default:
            return state;
    }
};

export default allReducer;

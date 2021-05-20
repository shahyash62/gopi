import { login } from '../services/authentication';
import { createFaq, deleteFaq, getFaq, saveFaq } from '../services/faq';

export const LOGIN = 'LOGIN';
export const loginAction = (username, password) => async (dispatch) => {
    try {
        const data = await login(username, password);
        if (data.accessToken) {
            dispatch({
                type: LOGIN,
                payload: data.accessToken,
            });
        }
    } catch (err) {
        console.error(err);
    }
};

export const GET_FAQ = 'GET_FAQ';
export const getFaqAction = () => async (dispatch) => {
    try {
        const data = await getFaq();
        if (data && data.result) {
            return dispatch({
                type: GET_FAQ,
                payload: data.result,
            });
        } else throw new Error('No data returned');
    } catch (err) {
        console.error(err);
    }
};

export const SAVE_FAQ = 'SAVE_FAQ';
export const saveFaqAction = (faq) => async (dispatch) => {
    try {
        const data = await saveFaq(faq);
        dispatch({
            type: SAVE_FAQ,
            payload: data.result,
        });
    } catch (err) {
        console.error(err);
    }
};
export const DELETE_FAQ = 'DELETE_FAQ';
export const deleteFaqAction = (id) => async (dispatch) => {
    try {
        const data = await deleteFaq(id);
        dispatch({
            type: DELETE_FAQ,
            payload: data.result._id,
        });
    } catch (err) {
        console.error(err);
    }
};
export const CREATE_FAQ = 'CREATE_FAQ';
export const createFaqAction = (faq) => async (dispatch) => {
    try {
        const data = await createFaq(faq);
        dispatch({
            type: CREATE_FAQ,
            payload: data.result,
        });
    } catch (err) {
        console.error(err);
    }
};

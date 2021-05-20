import { login } from '../services/authentication';
import { getFaq } from '../services/faq';

export const LOGIN = 'LOGIN';
export const loginAction = (username, password) => async (dispatch) => {
    try {
        const data = await login(username, password);
        if (data.accessCode) {
            dispatch({
                type: LOGIN,
                payload: data.accessCode,
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

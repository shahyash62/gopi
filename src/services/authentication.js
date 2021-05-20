import axios from 'axios';

export const login = async (email, password) => {
    try {
        const res = await axios.post('URL', {
            email,
            password,
        });
        if (res && res.data && res.data.accessToken) {
            localStorage.setItem('ACCESS_TOKEN', res.data.accessToken);
            return res.data;
        }
        throw new Error('Unknow error');
    } catch (err) {
        console.error(err);
        return 'Some error';
    }
};

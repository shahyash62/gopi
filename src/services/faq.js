import axios from 'axios';

export const getFaq = async () => {
    try {
        const res = await axios.get('URL');
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

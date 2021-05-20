import axios from 'axios';

export const getFaq = async () => {
    try {
        const res = await axios.get('http://localhost:4000/api/getFAQ');
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

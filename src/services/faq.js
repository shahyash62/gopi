import axios from 'axios';

export const getFaq = async () => {
    try {
        const res = await axios.get('http://localhost:4000/api/getFAQ');
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export const saveFaq = async (faq) => {
    try {
        const res = await axios.put('http://localhost:4000/api/updateFAQ', {
            faqId: faq._id,
            faqQuestion: faq.faqQuestion,
            faqAnswer: faq.faqAnswer,
            faqType: faq.faqType,
        });
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export const deleteFaq = async (faqId) => {
    try {
        const res = await axios.put('http://localhost:4000/api/deleteFAQ', {
            
                faqId,
        });
        return res.data;
    } catch (err) {
        console.error(err);
    }
};
export const createFaq = async (faq) => {
    try {
        const res = await axios.post('http://localhost:4000/api/addFAQ', {
            faqQuestion: faq.faqQuestion,
            faqAnswer: faq.faqAnswer,
            faqType: faq.faqType,
        });
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

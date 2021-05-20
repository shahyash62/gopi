import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createFaqAction, deleteFaqAction, getFaqAction, saveFaqAction } from '../actions/allActions';

const MainPage = ({ faqs, getFaqAction: getFaq, saveFaqAction: saveFaq, deleteFaqAction: deleteFaq, createFaqAction: createFaq }) => {
    const [selectedFaq, setSelectedFaq] = useState(null);
    useEffect(() => {
        getFaq();
    }, []);

    const handleSave = () => {
        saveFaq(selectedFaq);
    };

    const handleChange = (e) => {
        setSelectedFaq((faq) => {
            return {
                ...faq,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleDelete = () => {
        deleteFaq(selectedFaq._id);
    };

    const handleCreate = () => {
        createFaq(selectedFaq);
    };

    return (
        <div className="main-container">
            <ul className="list">
                {faqs.map((faq) => {
                    return (
                        <li key={faq._id} onClick={() => setSelectedFaq(faq)}>
                            <p>{`FAQ Question: ${faq.faqQuestion}`}</p>
                            <p>{`FAQ Answer: ${faq.faqAnswer}`}</p>
                        </li>
                    );
                })}
            </ul>
            <div className="input-form">
                {selectedFaq && (
                    <form>
                        <div className="input-container">
                            <label htmlFor="question">FAQ Question:</label>
                            <input onChange={handleChange} type="text" name="faqQuestion" value={selectedFaq.faqQuestion} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="answer">FAQ Answer:</label>
                            <input onChange={handleChange} type="text" name="faqAnswer" value={selectedFaq.faqAnswer} />
                        </div>
                        <div className="input-container">
                            <select value={selectedFaq.faqType} onChange={handleChange} name="faqType" id="type">
                                <option value="supplier">supplier</option>
                                <option value="re-seller">re-seller</option>
                            </select>
                        </div>
                        <div>
                            <button type="button" onClick={handleSave}>
                                Save
                            </button>
                            <button type="button" onClick={handleDelete}>
                                Delete
                            </button>
                            <button type="button" onClick={handleCreate}>
                                Create
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    faqs: state.all.faqs,
});

const mapDispatchToProps = {
    getFaqAction,
    saveFaqAction,
    deleteFaqAction,
    createFaqAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

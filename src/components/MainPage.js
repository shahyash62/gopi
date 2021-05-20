import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFaqAction } from '../actions/allActions';

const MainPage = ({ faqs, getFaqAction: getFaq }) => {
    const [selectedFaq, setSelectedFaq] = useState(null);
    useEffect(() => {
        getFaq();
    }, []);
    return (
        <div>
            <ul>
                {faqs.map((faq) => {
                    return (
                        <li key={faq._id} onClick={() => setSelectedFaq(faq)}>
                            <p>{`FAQ Question: ${faq.faqQuestion}`}</p>
                            <p>{`FAQ Answer: ${faq.faqAnswer}`}</p>
                        </li>
                    );
                })}
            </ul>
            <div>
                {selectedFaq && (
                    <div>
                        <div>
                            <label htmlFor="question">FAQ Question:</label>
                            <input type="text" value={selectedFaq.faqQuestion} />
                        </div>
                        <div>
                            <label htmlFor="answer">FAQ Answer:</label>
                            <input type="text" value={selectedFaq.faqAnswer} />
                        </div>
                        <div>
                            <button type="button">Save</button>
                            <button type="button">Delete</button>
                        </div>
                    </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

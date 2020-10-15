import React, { useState, useEffect } from 'react';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReviews(data);
        })
    }, [])
    
    return (
        <div className="container pl-5 pr-2 pt-5 mt-5 mb-5 pb-5">
            <h2 className="text-center mb-5">Client's <span className="text-green">Feedback</span></h2>
            <div className="row">
                {
                    reviews.map(review => <FeedbackCard key={review._id} review={review}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default Feedback;
import React from 'react';

const FeedbackCard = ({review}) => {
    return (
        <div className="col-md-3 mr-auto card p-4">
            <div className="row">
                <img className=" col-md-5 w-25 mb-2" src={`data:image/png;base64,${review.image.img}`} alt=""/>
                <div className="col-md-7">
                    <h5>{review.name}</h5>
                    <small>{review.company}</small>
                </div>
            </div>
            <p className="text-secondary">{review.review}</p>
        </div>
    );
};

export default FeedbackCard;
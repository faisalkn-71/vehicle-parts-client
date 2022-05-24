import React from 'react';

const Review = ({ review }) => {
    const { name, feedback, ratings } = review;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p><small>{feedback}</small></p>
                    <h2 className="card-title">{name}</h2>
                    <p>Ratings: {ratings}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Review;
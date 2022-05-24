import React from 'react';

const Review = ({ review }) => {
    const { name, feedback, ratings } = review;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <p><small>{feedback}</small></p>
                    <h2 class="card-title">{name}</h2>
                    <p>Ratings: {ratings}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Review;
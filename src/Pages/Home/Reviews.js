import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,  setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res =>  res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <h1  className='text-center text-4xl font-bold text-secondary'>Our Client Feedback</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.slice(reviews.length-3, reviews.length).map(review => <Review
                    key={review._id}
                    review = {review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;

import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const AddReview = () => {
    const handleReview = event => {
        event.preventDefault();
        
        const review = {
            feedback: event.target.feedback.value,
            name: event.target.name.value,
            ratings: event.target.ratings.value,
        }

        axios.post('https://fathomless-plateau-95313.herokuapp.com/reviews', review)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast("Successfully added your Review!!")
                }
            })

    }
    return (
        <div>
            <div className='my-3 flex flex-col justify-center items-center'>

                <form onSubmit={handleReview}>

                    <h1 className='text-2xl font-bold mb-4'>Please Add Review</h1>


                    <textarea className='input input-bordered input-secondary textarea w-full max-w-md' placeholder='Your message' name="feedback" id="" cols="50" rows="6" required></textarea>

                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="text" name='name' placeholder='Name' required />
                    <br />

                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="number" name='ratings' placeholder='Rating' required />
                    <br />

                    <input className='btn btn-primary w-100 text-white font-bold' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;
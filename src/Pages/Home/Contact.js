import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center items-center mt-24 bg-[url('/src/images/bg.jpg')] py-16 rounded">
            <div>
            <h1 className='text-xl text-secondary bg-black font-bold text-center pt-5'>Contact Us</h1>
            <h1 className='text-3xl text-white bg-black text-center mb-10 pb-5'>Stay Connected With US</h1>
           
            <form >
            <input type="email" placeholder="Email" className='input w-full max-w-md' required />
            <br />
            <br />
            <input type="text" placeholder="Subject" className='input w-full max-w-md' required />
            <br />
            <br />
            <textarea className='textarea w-full max-w-md' placeholder='Your message' name="" id="" cols="50" rows="6" required></textarea>
            <br />
            <br />
            <div className='flex justify-center'>
            <input className='btn btn-secondary text-white font-bold' type="submit" value="Submit" />
            </div>

            


            </form>
            </div>
        </div>
    );
};

export default Contact;
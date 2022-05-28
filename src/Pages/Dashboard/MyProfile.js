import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const handleOrderNow = event => {
        event.preventDefault();
        const order = {
            name: user.name,
            email: user.email,
            address: event.target.address.value,
            education: event.target.education.value,
            phone: event.target.phone.value,
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {

                }
            })

    }

    return (
        <div>
            <div className='m-3 '>

                <form onSubmit={handleOrderNow}>

                    <h1 className='text-2xl font-bold mb-4'>My Profile</h1>


                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="text" name='name' placeholder='Name' value={user?.displayName} required readOnly disabled />
                    <br />

                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="text" name='email' placeholder='Email' value={user?.email} required readOnly disabled />
                    <br />

                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="text" name='education' placeholder='Education' required />
                    <br />

                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="text" name='address' placeholder='address' autoComplete='off' required />
                    <br />


                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="text" name='phone' placeholder='phone' required />
                    <br />

                    
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
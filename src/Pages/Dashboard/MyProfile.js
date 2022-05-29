import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const email = user?.email;
    const [Profile, setProfile] = useState({});
    console.log(Profile)
    useEffect(() => {
        fetch(`http://localhost:5000/userProfile/${email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [])

   

    const handleProfile = event => {
        event.preventDefault();
        
        const myProfile = { 
            education: event.target.education.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }

        console.log(myProfile)

        if(email){
            fetch(`http://localhost:5000/userProfile/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myProfile),
            })
            .then(res => res.json())
            .then(data => {
                    toast('Successfully edited the profile!!')
                    window.location.reload();
            })
        }

    }

    return (
        <div>

        <div class="card lg:max-w-lg m-3 bg-base-100 shadow-xl">
        <div class="card-body">

        <h1 className='text-2xl text-center font-bold mb-4'>My Profile</h1>

            <img width='100px' height='100px' className="rounded-lg" src={user?.photoURL || 'https://i.ibb.co/whxhPPg/cute-girl.jpg'}  alt="" />

            <h2 class="card-title">Name: {user?.displayName}</h2>
            <p>Email: {user?.email}</p>
            <p>Education: {Profile.education}</p>
            <p>Address: {Profile.address}</p>
            <p>Phone: {Profile.phone}</p>
            
        </div> 
        </div>

        <br />
        <br />

            <div className='m-3 '>

                <form onSubmit={handleProfile}>

                    <h1 className='text-xl font-bold mb-4'>Update Profile</h1>



                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="text" name='education' placeholder='Education' required />
                    <br />

                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="text" name='address' placeholder='address' autoComplete='off' required />
                    <br />


                    <input className='input input-bordered input-secondary w-full max-w-md mb-2' type="text" name='phone' placeholder='phone' required />
                    <br />


                    <input className='btn btn-primary w-100 text-white font-bold' type="submit" value="Update" />

                    
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
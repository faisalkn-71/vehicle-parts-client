import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    if(user){
        console.log(user)
        navigate('/')
    }

   


    if (loading) {
        return <Loading />
    }

    let ErrorMessage;
    if (error) {
        ErrorMessage = <p className='text-red-500 ml-8'>{error.message}</p>
    }

    

    return (
        <div>


            {ErrorMessage}
            
            <div className='flex justify-center items-center card-body w-full max-w-md'>

                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline font-bold w-full max-w-sm">Continue With Google</button>

                
            </div>
        </div>
    );
};

export default SocialLogin;
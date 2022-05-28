import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';
import useToken from '../../hook/useToken';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const location = useLocation();
      const navigate = useNavigate();
      let from = location.state?.from?.pathname || "/";

      const [token] = useToken(user);

    const { register, formState: { errors }, handleSubmit } = useForm();


    useEffect(() => {
        if(token){
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    


    if(loading || updating){
        return <Loading></Loading>
    }

    let ErrorMessage;
    if(error || updateError){
        ErrorMessage = <p className='text-red-500'>{error.message}</p>
    }

   


    const onSubmit = async data => {
        // console.log(data)
    
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({displayName: data.name})
        // console.log('update')
    };
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">

                <div className="card w-full max-w-md  shadow-2xl bg-base-100 pb-5">
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold">Sign Up</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-md">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Your Name'
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },
                                        
                                    })}
                                    className="input input-bordered w-full max-w-md"
                                />
                                <label className="label">
                                    {
                                        errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                    }
                                    
                                </label>
                            </div>
                            <div className="form-control w-full max-w-md">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder='Your Email'
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
                                        }
                                    })}
                                    className="input input-bordered w-full max-w-md"
                                />
                                <label className="label">
                                    {
                                        errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    }
                                    {
                                        errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    }
                                </label>
                            </div>
                            <div className="form-control w-full max-w-md">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                        }
                                    })}
                                    className="input input-bordered w-full max-w-md"
                                />
                                <label className="label">
                                    {
                                        errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                    }
                                    {
                                        errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                    }
                                </label>
                            </div>

                                    {ErrorMessage}

                            <input className='btn w-full max-w-md text-white font-bold' type="submit" value='Sign Up' />
                        </form>
                        <p>Already have an account? <Link className='text-primary' to='/login'>Please Login</Link></p>


                    </div>

                    <div className="divider">OR</div>

                    <SocialLogin />

                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React from 'react';
import { Link } from 'react-router';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleLogin = (data) => {
        console.log(data);
    } 

    return (
        <div className='bg-base-300 min-h-screen grid place-items-center'>
            <div className='md:w-[400px] w-fit bg-white rounded-xl p-7 shadow-2xl'>
                <h1 className='text-black font-bold text-2xl text-center pb-3 pt-4'>Welcome Back!</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">

                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" {...register("email", {required: {value: true, message: "Email is required"}})} className="input w-full" placeholder="Email" />
                        {errors?.email && <p className='text-red-500'>{errors?.email.message}</p>}

                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" {...register("password", {required: {value: true, message: "Password is required"}})} className="input w-full" placeholder="Password" />
                        {errors?.password && <p className='text-red-500'>{errors?.password.message}</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn btn-neutral mt-2">Login</button>
                    </fieldset>
                </form>
                <p className='my-3 font-medium text-center'>Don't have an account? <Link className='text-primary font-semibold' to='/register'>Register</Link></p>
                <p className='text-center font-medium text-sm'>Or With</p>
                <div className='flex justify-center my-2'></div>
                <div className=''>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
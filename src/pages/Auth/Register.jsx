import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import uploadImage from '../../utils/uploadImage';

const Register = () => {
    const [showPass, setShowPass] = useState(true);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {createUser, updateUser, setLoading} = useAuth();
    const navigate = useNavigate();

    const handleRegister = async(data) => {
        const image = data.image[0];
                
        createUser(data.email, data.password)
        .then( async() => {
            const uploadRes = await uploadImage(image);
            const url = uploadRes.data.url;
            
            const userInfo = {
                displayName: data.name,
                photoURL: url
            }

            updateUser(userInfo)
            .then(()=> {
                console.log("inside the update user");
                toast.success("Account created successfully");
                setLoading(false);
                navigate('/');
            })
            .catch(err => {
            toast.error(err.message);
        })
        })
        .catch(err => {
            toast.error(err.message);
        })
    }

    return (
        <div className='bg-base-300 min-h-screen grid place-items-center'>
            <div className='md:w-[400px] w-fit bg-white rounded-xl p-7 shadow-2xl'>
                <h1 className='text-black font-bold text-2xl text-center pb-3 pt-4'>Register Now</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">

                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" {...register("name", {required: {value: true, message: "Name is required"}})} className="input w-full" placeholder="Name" />
                        {errors?.name && <p className='text-red-500'>{errors?.name.message}</p>}

                        {/* photo */}
                        <label className="label">Upload Photo</label>
                        <input type="file" {...register("image", {required: {value: true, message: "Image is required"}})} className="file-input w-full" />
                        {errors?.image && <p className='text-red-500'>{errors?.image.message}</p>}

                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" {...register("email", {required: {value: true, message: "Email is required"}})} className="input w-full" placeholder="Email" />
                        {errors?.email && <p className='text-red-500'>{errors?.email.message}</p>}

                        {/* password */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={showPass ? "password" : "text"} {...register("password", {required: {value: true, message: "Password is required"}, pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/, message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character and length at least 6 characters"}})} className="input w-full" placeholder="Password" />

                            <div className='absolute z-10 right-3 top-1/3'>{showPass ? <button type='button' className='hover:cursor-pointer' onClick={()=> setShowPass(false)}><FaEyeSlash /></button> : <button type='button' className='hover:cursor-pointer' onClick={()=> setShowPass(true)}><FaEye /></button>}</div>
                        </div>
                        {errors?.password && <p className='text-red-500'>{errors?.password.message}</p>}


                        <button className="btn btn-neutral mt-2">Register</button>
                    </fieldset>
                </form>
                <p className='my-3 font-medium text-center'>Already have an account? <Link className='text-primary font-semibold' to='/login'>Login</Link></p>
                <p className='text-center font-medium text-sm'>Or With</p>
                <div className='flex justify-center my-2'></div>
                <div className=''>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
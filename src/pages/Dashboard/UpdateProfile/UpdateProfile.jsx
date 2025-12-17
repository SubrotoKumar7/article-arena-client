import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import uploadImage from '../../../utils/uploadImage';
import toast from 'react-hot-toast';
import useAxiosSecured from '../../../hooks/useAxiosSecured';

const UpdateProfile = () => {
    const {user, updateUser} = useAuth();
    const {register, handleSubmit, formState : {errors}} = useForm();
    const axiosSecure = useAxiosSecured();

    
    const handleUpdateProfile = async(data) => {

        const image = data.image[0];
        const profile = user?.photoURL;
        let profileImg;

        
        if(image){
            const uploadRes = await uploadImage(image);
            profileImg = uploadRes.data.url;
        }else{
            profileImg = profile;
        }

        const userData = {
            displayName: data.displayName,
            address: data.address,
            photoURL: profileImg,
            bio: data.bio,
            gender: data.gender,
            phoneNumber: data.phoneNumber
        }

        updateUser({displayName: data.displayName, photoURL: profileImg})
        .then(()=> {
            axiosSecure.patch('/update-user',userData)
            .then(res=> {
                if(res.data.modifiedCount){
                    toast.success("Profile update successfully");
                }
            })
            .catch(err=> {
                toast.error(err.message);
            })
        })
        .catch(err=> {
            toast.error(err.message);
        })



    }

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">


                    <form onSubmit={handleSubmit(handleUpdateProfile)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className='grid col-span-2'>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Update Your Profile</h2>
                            <div  className="flex flex-col items-center mb-8">
                                <img src={user?.photoURL} referrerPolicy='no-referrer' alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"/>

                                <label className="mt-4 cursor-pointer text-indigo-600 font-medium">
                                    Change Profile Picture
                                    <input type="file" {...register('image')} className="hidden" />
                                </label>
                            </div>
                        </div>
                    
                        {/* fullName */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                            <input type="text" {...register('displayName', {required:{message: "User name is required", value: true}})} defaultValue={user?.displayName} placeholder="Enter your full name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                            {errors?.displayName && <p className='text-red-500'>{errors.displayName.message}</p>}
                        </div>

                        {/* phone */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                            <input type="number" {...register('phoneNumber', {required: {message: "Phone Number is required", value: true}})} placeholder="+880..." className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            {errors?.phoneNumber && <p className='text-red-500'>{errors.phoneNumber.message}</p>}
                        </div>
                        

                        {/* address */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Address</label>
                            <input type="text" {...register('address', {required: {message: "Address is required", value: true}})} placeholder="Enter address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                            {errors?.address && <p className='text-red-500'>{errors.address.message}</p>}
                        </div>

                        {/* gender */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Gender</label>
                            <div className='flex items-center gap-5'>
                                <div>
                                    <input type="radio" {...register('gender', {required: "Gender is required"})} value='male' id='male' className="radio radio-neutral mr-1" />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div>
                                    <input type="radio" {...register('gender')} value='female' id='female' className="radio radio-neutral mr-1" />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                            {errors?.gender && <p className='text-red-500'>{errors.gender.message}</p>}
                        </div>

                        {/* bio */}
                        <div className="md:col-span-2">
                            <label className="block text-gray-700 font-medium mb-1">Short Bio</label>
                            <textarea rows="4" {...register('bio', {required: {message: "Bio is required", value: true}})} placeholder="Write something about yourself..." className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                            {errors?.bio && <p className='text-red-500'>{errors.bio.message}</p>}
                        </div>

                        <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                            <button type="submit" className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Save Changes</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
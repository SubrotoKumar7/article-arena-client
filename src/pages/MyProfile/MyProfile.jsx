import React from 'react';
import Container from '../../components/Shared/Container/Container';
import useAxiosSecured from '../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import Loader from '../../components/Loader/Loader';
import { NavLink } from 'react-router';

const MyProfile = () => {
    const axiosSecure = useAxiosSecured();
    const {user} = useAuth();
    const {data: profile = {}, isLoading} = useQuery({
        queryKey: ['profile', user?.email],
        queryFn: async()=> {
            const res = await axiosSecure.get('/user-profile');
            return res.data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }

    
    return (
        <div className='py-10'>
            <Container>
                <div className="max-w-5xl mx-auto p-4 md:p-8">
                    <div className="bg-base-200 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
                        <img
                        src={profile?.photoURL}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-primary object-cover"
                        />

                        <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold">{profile?.displayName}</h2>
                        <p className="text-gray-500">{profile?.email}</p>

                        <span className="badge badge-primary mt-2 capitalize">
                            {profile?.role}
                        </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Personal Info */}
                        <div className="bg-base-200 rounded-xl shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

                        <div className="space-y-2 text-sm">
                            <p>
                            <span className="font-medium">Gender:</span>{" "}
                            <span className="capitalize">{profile?.gender || "N/A"}</span>
                            </p>
                            <p>
                            <span className="font-medium">Phone:</span>{" "}
                            {profile?.phoneNumber || "N/A"}
                            </p>
                            <p>
                            <span className="font-medium">Address:</span>{" "}
                            {profile?.address || "N/A"}
                            </p>
                            <p>
                            <span className="font-medium">Joined:</span>{" "}
                            {new Date(profile?.createdAt).toDateString()}
                            </p>
                        </div>
                        </div>

                        <div className="bg-base-200 rounded-xl shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">Bio</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {profile?.bio || "No bio added yet."}
                        </p>
                        </div>
                    </div>

                    <div className="mt-8 text-right">
                        <NavLink to={'/dashboard/update-profile'} className="btn btn-primary">
                        Edit Profile
                        </NavLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyProfile;
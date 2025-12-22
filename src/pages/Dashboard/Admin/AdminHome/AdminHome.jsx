import React from 'react';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import Loader from '../../../../components/Loader/Loader';

const AdminHome = () => {
    const axiosSecure = useAxiosSecured();
    const {user} = useAuth();
    const {data: adminHome = [], isLoading} = useQuery({
        queryKey: ['admin-dashboard', user?.email],
        queryFn: async()=> {
            const res = await axiosSecure.get('/admin-dashboard');
            return res.data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }

    
    return (
        <div>
            <div className='pt-5 pb-10'>
                <div className="bg-linear-to-r from-slate-900 to-indigo-900 rounded-xl p-6 text-white shadow-lg py-10">
                    <h1 className="text-2xl md:text-3xl font-bold">Admin Control Panel 👑</h1>
                    <p className="mt-2 text-sm md:text-base opacity-90 max-w-2xl">Manage users, review contests, and keep the platform running smoothly.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {/* user status row */}
                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>All Users</h1>
                    <p className='font-bold text-4xl text-blue-700'>{adminHome.allUser}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Admin</h1>
                    <p className='font-bold text-4xl text-green-700'>{adminHome.totalAdmin}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Creators</h1>
                    <p className='font-bold text-4xl text-yellow-500'>{adminHome.totalCreator}</p>
                </div>


                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>User</h1>
                    <p className='font-bold text-4xl text-purple-500'>{adminHome.totalNormalUser}</p>
                </div>

                {/* contest status row */}
                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>All Contest</h1>
                    <p className='font-bold text-4xl text-teal-700'>{adminHome.totalContest}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Approved Contests</h1>
                    <p className='font-bold text-4xl text-yellow-500'>{adminHome.approvedContest}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Pending Contests</h1>
                    <p className='font-bold text-4xl text-cyan-700'>{adminHome.pendingContest}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Rejected Contests</h1>
                    <p className='font-bold text-4xl text-red-500'>{adminHome.rejectContest}</p>
                </div>

                {/* others status */}
                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Participant</h1>
                    <p className='font-bold text-4xl text-indigo-700'>{adminHome.totalParticipant}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Total Payment</h1>
                    <p className='font-bold text-4xl text-blue-500'>{adminHome.totalPayment}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Total Winner</h1>
                    <p className='font-bold text-4xl text-lime-600'>{adminHome.totalWinner}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Loser Participant</h1>
                    <p className='font-bold text-4xl text-red-500'>{adminHome.totalPayment - adminHome.totalWinner}</p>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;

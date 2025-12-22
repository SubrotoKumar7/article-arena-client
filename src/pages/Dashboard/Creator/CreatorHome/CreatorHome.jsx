import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../../components/Loader/Loader';

const CreatorHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecured();
    const {data: creatorHome = {}, isLoading} = useQuery({
        queryKey: ['creator-dashboard', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get('/creator-dashboard');
            return res.data;
        }
    })

    const {data: latestContest = [], isLoading: contestLoading} = useQuery({
        queryKey: ['creatorLatestContest', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get('/my-contest');
            return res.data;
        },
        select: (data) => data.slice(0, 3)
    })

    if(isLoading || contestLoading){
        return <Loader></Loader>;
    }



    return (
        <div>
            <div className='pt-5 pb-10'>
                <div className="rounded-xl p-6 bg-linear-to-r from-emerald-600 to-teal-600 py-10 text-white shadow">
                    <p className="text-lg opacity-90">Welcome back,</p>

                    <h2 className="text-2xl md:text-3xl font-bold mt-1">{user?.displayName} 👋</h2>
                    <p className='badge'>Creator</p>

                    <p className="mt-3 text-sm md:text-base opacity-90 max-w-xl">Manage your contests, review submissions, and declare winners — all from one place.</p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <Link to={'/dashboard/add-contest'} className="bg-white text-emerald-600 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">+ Create Contest</Link>

                        <Link to={'/dashboard/my-contest'} className="border border-white/40 px-5 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition">My Contests</Link>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10'>
                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Total Contests</h1>
                    <p className='font-bold text-4xl text-blue-700'>{creatorHome.totalContest}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Pending Contest</h1>
                    <p className='font-bold text-4xl text-yellow-500'>{creatorHome.pendingContest}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Rejected Contest</h1>
                    <p className='font-bold text-4xl text-red-700'>{creatorHome.rejectedContest}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Active Contest</h1>
                    <p className='font-bold text-4xl text-purple-500'> <span>{creatorHome.activeContest}</span></p>
                </div>
            </div>

            <div className='space-y-2 my-10'>
                <h1 className='text-2xl font-semibold mb-5'>Latest Contest</h1>
                {
                    latestContest.length > 0 ?

                    latestContest.map(contest => <div key={contest._id} className='py-5 my-2 shadow-2xl px-2 rounded hover:shadow duration-300'>
                            <h1 className='text-xl font-medium mb-1'>{contest.contestName}</h1>
                            <p className='text-gray-700'>Category: {contest.category}</p>
                            <p className='text-gray-500'>Deadline: {new Date(contest.deadline).toDateString()}</p>
                        </div>
                    )
                    
                    :
                    <div className='py-20'>
                        <h1 className='font-semibold text-2xl text-center'>No Latest Contest</h1>
                    </div>
                }

            </div>
        </div>
    );
};

export default CreatorHome;

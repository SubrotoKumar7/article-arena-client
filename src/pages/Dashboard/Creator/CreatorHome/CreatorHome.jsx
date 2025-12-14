import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router';

const CreatorHome = () => {
    const {user} = useAuth();

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
                    <p className='font-bold text-4xl text-blue-700'>12</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Pending Contest</h1>
                    <p className='font-bold text-4xl text-yellow-500'>3</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Rejected Contest</h1>
                    <p className='font-bold text-4xl text-red-700'>2</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Active Contest</h1>
                    <p className='font-bold text-4xl text-purple-500'> <span>7</span></p>
                </div>
            </div>

            <div className='space-y-2 my-10'>
                <h1 className='text-2xl font-semibold mb-5'>Latest Contest</h1>
                <div className='py-5 my-2 shadow-2xl px-2 rounded hover:shadow duration-300'>
                    <h1 className='text-xl font-medium mb-1'>Tech Article Contest</h1>
                    <p className='text-gray-700'>Category: Technology</p>
                    <p className='text-gray-500'>Deadline: 12 Dec 2025</p>
                </div>

                <div className='py-5 my-2 shadow-2xl px-2 rounded hover:shadow duration-300'>
                    <h1 className='text-xl font-medium mb-1'>Tech Article Contest</h1>
                    <p className='text-gray-700'>Category: Technology</p>
                    <p className='text-gray-500'>Deadline: 12 Dec 2025</p>
                </div>
                
                <div className='py-5 my-2 shadow-2xl px-2 rounded hover:shadow duration-300'>
                    <h1 className='text-xl font-medium mb-1'>Tech Article Contest</h1>
                    <p className='text-gray-700'>Category: Technology</p>
                    <p className='text-gray-500'>Deadline: 12 Dec 2025</p>
                </div>
            </div>
        </div>
    );
};

export default CreatorHome;

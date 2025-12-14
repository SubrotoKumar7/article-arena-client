import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useRole from '../../../../hooks/useRole';
import { Link } from 'react-router';

const UserHome = () => {
    const {user} = useAuth();
    const {role: {role}} = useRole();

    return (
        <div className='mb-20'>
            <div className='pt-5 pb-10'>
                <div className="rounded-xl p-6 custom-gradient py-10 text-white shadow">
                    <p className="text-lg opacity-90">Welcome back,</p>

                    <h2 className="text-2xl md:text-3xl font-bold mt-1">{user?.displayName} 👋</h2>

                    <p className="mt-3 text-sm md:text-base opacity-90 max-w-xl">Ready to showcase your writing skills? Participate in contests, submit articles, and win exciting prizes.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Participant Contest</h1>
                    <p className='font-bold text-4xl text-blue-700'>12</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Total Wins</h1>
                    <p className='font-bold text-4xl text-yellow-500'>🥇 3</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Total Prize Earned</h1>
                    <p className='font-bold text-4xl text-green-700'>$500</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Winning Percentage</h1>
                    <p className='font-bold text-4xl text-purple-500'> <span>25%</span></p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-10'>
                <div className='col-span-3 order-2 md:order-1'>
                    <h1 className='text-xl font-medium mb-2'>My Participant Contests</h1>
                    <div className='space-y-2'>
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
                    <div className='mt-5'>
                        <Link className='btn btn-primary' to={'/dashboard/joined-contest'}>View All</Link>
                    </div>
                </div>
                <div className='col-span-1 order-1 md:order-2 h-fit w-full border border-gray-300 rounded shadow-2xl p-5'>
                    <h1 className='text-xl font-medium mb-2'>Profile Summary</h1>
                    <div>
                        <div className='flex gap-2 mb-5'>
                            <img className='w-15 h-15' src={user?.photoURL} alt="user images" />
                            <div>
                                <h1 className='font-semibold text-lg'>{user?.displayName}</h1>
                                <p className='capitalize text-xs badge badge-xs badge-secondary'>{role}</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <p>Winning Percentage</p>
                            <progress className='progress progress-success' max={100} value={20}></progress>
                            <p className='text-xs'>3 wins out of 12 contests</p>
                        </div>
                        <button className='w-full btn btn-primary'>Edit Profile</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserHome;
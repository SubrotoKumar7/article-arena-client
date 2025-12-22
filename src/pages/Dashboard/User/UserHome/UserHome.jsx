import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../../components/Loader/Loader';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const UserHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecured();
    const {data: myContest = [], isLoading} = useQuery({
        queryKey: ['myJoinedContest', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get('my-joined-contest');
            return res.data;
        },
        select: (data) => data.slice(0, 3)
    })

    const {data: userHome = {}, isLoading: homeLoading} = useQuery({
        queryKey: ['user-dashboard', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get('/user-dashboard');
            return res.data;
        }
    })

    if(isLoading || homeLoading){
        return <Loader></Loader>
    }

    const chartData = [
        { name: "Win", value: userHome.totalWin },
        { name: "Lose", value: userHome.totalParticipant - userHome.totalWin }
    ];

    const COLORS = ["#22c55e", "#ef4444"];



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
                    <p className='font-bold text-4xl text-blue-700'>{userHome.totalParticipant}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Total Wins</h1>
                    <p className='font-bold text-4xl text-yellow-500'>🥇 {userHome.totalWin}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Total Prize Earned</h1>
                    <p className='font-bold text-4xl text-green-700'>$ {userHome.totalMoney}</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Winning Percentage</h1>
                    <p className='font-bold text-4xl text-purple-500'> <span>{userHome.winningPercentage}%</span></p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-10'>

                <div className='md:col-span-2 order-3 md:order-2'>
                    <h1 className='text-xl font-medium mb-2'>My Participant Contests</h1>
                    <div className='space-y-2'>
                        {
                            myContest.length > 0 ?
                            myContest.map(contest => 
                                <div key={contest._id} className='py-5 my-2 shadow-2xl px-2 rounded hover:shadow duration-300'>
                                    <h1 className='text-xl font-medium mb-1'>{contest.contestName}</h1>
                                    <p className='text-gray-700'>Category: {contest.category}</p>
                                    <p className='text-gray-500'>Deadline: {new Date().toDateString()}</p>
                                </div>
                            )
                            
                            :
                            <div className='flex h-50 items-center justify-center'>
                                <h1 className='text-2xl font-semibold text-center'>You haven't joined any contests yet.</h1>
                            </div>
                        }

                    </div>
                    {
                        myContest.length > 0 &&
                        <div className='mt-5'>
                            <Link className='btn btn-primary' to={'/dashboard/joined-contest'}>View All</Link>
                        </div>
                    }
                </div>

                <div className='md:col-span-1 w-full order-2 md:order-1 shadow-2xl border border-gray-300 rounded'>
                    <div className="w-full h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label
                            >
                                {chartData.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip></Tooltip>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>


                <div className='md:col-span-1 order-1 md:order-3 h-fit w-full border border-gray-300 rounded shadow-2xl p-5'>
                    <h1 className='text-xl font-medium mb-2'>Profile Summary</h1>
                    <div>
                        <div className='flex gap-2 mb-5'>
                            <img className='w-15 h-15' src={user?.photoURL} alt="user images" />
                            <div>
                                <h1 className='font-semibold text-lg'>{user?.displayName}</h1>
                                <p className='capitalize text-xs badge badge-xs badge-secondary'>User</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <p>Winning Percentage</p>
                            <progress className='progress progress-success' max={100} value={userHome.winningPercentage}></progress>
                            <p className='text-xs'>{userHome.totalWin} wins out of {userHome.totalParticipant} contests</p>
                        </div>
                        <Link to={'/dashboard/update-profile'} className='w-full btn btn-primary'>Edit Profile</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserHome;
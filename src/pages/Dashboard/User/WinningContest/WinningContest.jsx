import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import Loader from '../../../../components/Loader/Loader';

const WinningContest = () => {
    const axiosSecure = useAxiosSecured();
    const {data: winningContest = [], isLoading} = useQuery({
        queryKey: ['winningContest'],
        queryFn: async() => {
            const res = await axiosSecure.get('/winning-contest');
            return res.data;
        }
    });

    if(isLoading){
        return <Loader></Loader>
    }

    return (
        <div className='p-5'>
            <div>
                <div className='px-5 py-7 h-[200px] flex items-center justify-center flex-col bg-linear-to-br from-blue-600 via-blue-600 to-blue-400 text-white rounded mb-10'>
                    <h1 className='text-3xl font-bold mb-2'>🏆 My Winning Contests</h1>
                    <p className='text-lg'>Celebrate your achievements and rewards</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {   
                        winningContest.length > 0 ?
                        winningContest.map(win => <div key={win._id} className='shadow-2xl p-5 rounded border border-gray-200'>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold py-1'>Congratulations</h1>
                                <div className='my-2 text-2xl'>🎉🎉🎉</div>
                            </div>
                            <div className='space-y-1.5'>
                                <h1 className='text-xl mb-3 font-semibold'>{win.contestName}</h1>
                                <div className='mb-1'>📅 Winning Date: <span>{new Date(win.createdAt).toDateString()}</span></div>
                            </div>
                            <div className='flex items-center justify-between pt-3'>
                                <div className='text-xl text-green-700 font-bold'>💰 <span>${win.prizeMoney}</span></div>
                                <div className='font-semibold'>🏆 Winner</div>
                            </div>
                        </div>)
                        
                        :
                        <div className='h-[70vh] flex items-center justify-center col-end-1 md:col-span-3'>
                            <h1 className='text-2xl font-semibold text-center'>You have not won any content.</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default WinningContest;



import React from 'react';

const WinningContest = () => {
    return (
        <div className='p-5'>
            <div>
                <div className='px-5 py-7 h-[200px] flex items-center justify-center flex-col bg-linear-to-br from-blue-600 via-blue-600 to-blue-400 text-white rounded mb-10'>
                    <h1 className='text-3xl font-bold mb-2'>🏆 My Winning Contests</h1>
                    <p className='text-lg'>Celebrate your achievements and rewards</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <div className='shadow-2xl p-5 rounded border border-gray-200'>
                        <h1 className='text-xl mb-3 font-semibold'>Tech Article Writing Contest</h1>
                        <div className='space-y-1.5'>
                            <div>🏷️ Category: <span>Technology</span></div>
                            <div className='mb-1'>📅 End Date: <span>12 January 2026</span></div>
                        </div>
                        <div className='flex items-center justify-between pt-3'>
                            <div className='text-xl text-green-700 font-bold'>💰 <span>$1000</span></div>
                            <div className='font-semibold'>🏆 Winner</div>
                        </div>
                    </div>

                    <div className='shadow-2xl p-5 rounded border border-gray-200'>
                        <h1 className='text-xl mb-3 font-semibold'>Tech Article Writing Contest</h1>
                        <div className='space-y-1.5'>
                            <div>🏷️ Category: <span>Technology</span></div>
                            <div className='mb-1'>📅 End Date: <span>12 January 2026</span></div>
                        </div>
                        <div className='flex items-center justify-between pt-3'>
                            <div className='text-xl text-green-700 font-bold'>💰 <span>$1000</span></div>
                            <div className='font-semibold'>🏆 Winner</div>
                        </div>
                    </div>

                    <div className='shadow-2xl p-5 rounded border border-gray-200'>
                        <h1 className='text-xl mb-3 font-semibold'>Tech Article Writing Contest</h1>
                        <div className='space-y-1.5'>
                            <div>🏷️ Category: <span>Technology</span></div>
                            <div className='mb-1'>📅 End Date: <span>12 January 2026</span></div>
                        </div>
                        <div className='flex items-center justify-between pt-3'>
                            <div className='text-xl text-green-700 font-bold'>💰 <span>$1000</span></div>
                            <div className='font-semibold'>🏆 Winner</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WinningContest;



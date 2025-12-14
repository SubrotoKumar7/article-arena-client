import React from 'react';

const AdminHome = () => {

    return (
        <div>
            <div className='pt-5 pb-10'>
                <div className="bg-linear-to-r from-slate-900 to-indigo-900 rounded-xl p-6 text-white shadow-lg py-10">
                    <h1 className="text-2xl md:text-3xl font-bold">Admin Control Panel 👑</h1>
                    <p className="mt-2 text-sm md:text-base opacity-90 max-w-2xl">Manage users, review contests, and keep the platform running smoothly.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Total Users</h1>
                    <p className='font-bold text-4xl text-blue-700'>12</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Creators</h1>
                    <p className='font-bold text-4xl text-yellow-500'>30</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Pending Contest</h1>
                    <p className='font-bold text-4xl text-green-700'>10</p>
                </div>

                <div className='shadow-2xl border border-gray-200 px-5 py-10 rounded-xl'>
                    <h1 className='font-semibold mb-4'>Active Contest</h1>
                    <p className='font-bold text-4xl text-purple-500'>20</p>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;

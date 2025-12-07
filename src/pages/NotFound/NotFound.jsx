import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { IoWarningOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-center'>
                <div className='w-fit mx-auto py-5'>
                    <IoWarningOutline className='text-red-500' size={45} />
                </div>
                <h1 className='font-extrabold text-3xl'>404 - Not Found</h1>
                <p className='mb-5 mt-2'>It seems like the page you are trying to visit doesn't exits.</p>
                <Link className='btn btn-primary' to={'/'}><GoArrowLeft /> Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
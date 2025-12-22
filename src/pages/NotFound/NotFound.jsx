import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { IoMdHome } from 'react-icons/io';
import { IoWarningOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center h-screen bg-base-100'>
            <div className='text-center'>
                <div className='w-fit mx-auto py-5'>
                    <IoWarningOutline className='text-red-500' size={45} />
                </div>
                <h1 className='font-extrabold text-3xl'>404 - Not Found</h1>
                <p className='mb-5 mt-2'>It seems like the page you are trying to visit doesn't exits.</p>
                <Link className='btn btn-primary' to={'/'}><IoMdHome /> Home</Link>
                <button className='btn btn-secondary ml-2' onClick={()=> navigate(-1)}><GoArrowLeft /> Back</button>
            </div>
        </div>
    );
};

export default NotFound;
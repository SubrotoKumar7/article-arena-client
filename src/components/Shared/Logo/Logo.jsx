import React from 'react';
import { Link } from 'react-router';
import logo from '../../../assets/logo.png';

const Logo = () => {
    return (
        <div>
            <Link className='flex items-center' to='/'>
            <img className='w-7 h-7' src={logo} alt="logo" />
            <h1 className='md:text-2xl font-semibold mt-2 -ml-1'>Article Arena</h1>
        </Link>
        </div>
    );
};

export default Logo;
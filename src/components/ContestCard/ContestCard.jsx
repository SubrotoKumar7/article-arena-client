import React from 'react';
import environmentImg from '../../assets/environment.jpg';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router';
import { FaUserPlus } from 'react-icons/fa';

const ContestCard = () => {
    return (
        <div className='p-3 rounded shadow-2xl hover:scale-105 duration-300'>
            <div className='w-full h-[230px] relative'>
                <img className='relative z-10 w-full h-full' src={environmentImg} alt="contest images" />
                <h1 className='absolute z-20 bottom-2 right-2 text-white text-xl bg-secondary rounded p-1'>Environment</h1>
            </div>
            <div className='mt-2'>
                <h1 className='text-xl font-semibold py-2'>The Future of Earth: Global Warming Awareness Contest</h1>
                <div className='flex justify-between items-center gap-2 py-1'>
                    <div className='flex items-center gap-1'>
                        <FaUserPlus /> 20
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdFavoriteBorder size={20} /> 50
                    </div>
                </div>
                <p className='text-sm pb-2'>Join the movement to fight climate change and raise awareness about the impacts of global warming. This contest challenges you to explore...</p>
                <Link className='btn w-full btn-primary mt-1' to={'/details/id'}>Details</Link>
            </div>
        </div>
    );
};

export default ContestCard;

import React from 'react';
import { Link } from 'react-router';

const ContestCard = ({contest}) => {

    return (
        <div className='p-3 rounded shadow-2xl hover:scale-105 duration-300 border border-gray-300'>
            <div className='w-full h-[230px] relative'>
                <img className='relative z-10 w-full h-full' src={contest.image} alt="contest images" />
                <h1 className='absolute z-20 bottom-2 right-2 text-white text-xl bg-secondary rounded p-1'>{contest.category}</h1>
            </div>
            <div className='mt-2 text-sm'>
                <h1 className='text-xl font-semibold py-2'>{contest.contestName}</h1>
                <div className='mb-1'>
                    <p className='flex items-center gap-2'><span className='font-medium'>Total Participant:</span> <span className="font-bold">{contest.participant}</span></p>

                    <p className='flex items-center gap-2'><span className='font-medium'>Entry Fee:</span> <span className="font-bold">${contest.price}</span></p>

                    <p className='flex items-center gap-2'><span className='font-medium'>Prize Money:</span> <span className="font-bold">${contest.prizeMoney}</span></p>
                </div>
                <p className='text-sm pb-2'>{contest.description.length > 70 ? contest.description.slice(0, 70) + '...' : contest.description}</p>
                <Link className='btn w-full btn-primary mt-1' to={`/details/${contest._id}`}>Details</Link>
            </div>
        </div>
    );
};

export default ContestCard;

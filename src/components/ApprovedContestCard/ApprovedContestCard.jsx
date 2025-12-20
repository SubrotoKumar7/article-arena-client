import React from 'react';
import { Link } from 'react-router';

const ApprovedContestCard = ({contest}) => {

    return (
        <div className='my-5'>
            <div className='flex gap-5 flex-col md:flex-row items-center justify-between w-full md:w-10/12 p-3 mx-auto rounded border border-gray-100 shadow-2xl'>
                <div className='flex flex-col md:flex-row gap-2'>
                    <img className='rounded w-full h-60 md:w-50 md:h-35' src={contest.image} alt="contest image" />
                    <div className='flex-1'>
                        <h1 className='text-xl whitespace-nowrap font-semibold mb-1'>{contest.contestName}</h1>
                        <div>
                            <p><span className='font-medium'>Total Participant:</span> <span>{contest.participant}</span></p>
                            <p><span className='font-medium'>Category:</span> <span>{contest.category}</span></p>
                            <p><span className='font-medium'>Price Money:</span> <span>{contest.prizeMoney}$</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/dashboard/all-participant/${contest._id}`} className='btn btn-primary'>view participant</Link>
                </div>
            </div>
        </div>
    );
};

export default ApprovedContestCard;
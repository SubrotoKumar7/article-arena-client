import React from 'react';

const ApprovedContestCard = () => {
    return (
        <div className='my-5'>
            <div className='flex gap-5 flex-col md:flex-row items-center justify-between w-full md:w-10/12 p-3 mx-auto rounded border border-gray-100 shadow-2xl'>
                <div className='flex flex-col md:flex-row gap-2'>
                    <img className='rounded' src="https://placehold.co/150x120" alt="contest image" />
                    <div className='flex-1'>
                        <h1 className='text-xl whitespace-nowrap font-semibold mb-1'>Contest Name</h1>
                        <div>
                            <p><span className='font-medium'>Total Participant:</span> <span>30</span></p>
                            <p><span className='font-medium'>Category:</span> <span>Wid Life</span></p>
                            <p><span className='font-medium'>Price Money:</span> <span>1000$</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary'>view participant</button>
                </div>
            </div>
        </div>
    );
};

export default ApprovedContestCard;
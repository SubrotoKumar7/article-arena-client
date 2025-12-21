import React from 'react';
import Heading from '../Shared/Heading/Heading';

const Winner = ({contestWinner}) => {
    
    return (
        <div>
            <Heading position={'text-center'} title={'Contest Winner'} subtitle={'Congratulations to our winner 🎉 '}></Heading>
            <div>
                <div className='bg-base-300 rounded-xl flex items-center justify-center gap-2 py-10 mt-5'>
                    <img className='w-30 h-30 rounded-full p-1 border-primary border-2' src={contestWinner.winnerPhoto} alt="winner picture" />
                    <div>
                        <h1 className='text-2xl font-semibold'>{contestWinner.winnerName}</h1>
                        <p>{contestWinner.winnerEmail}</p>
                        <p className='font-semibold'>Price Money: <span className='text-primary'>${contestWinner.prizeMoney}</span></p>
                    </div>
                </div>
                <div className='mt-5 text-center'>
                    <p>This Victory is well deserved! We are proud of your achievement.</p>
                </div>
            </div>
        </div>
    );
};

export default Winner;
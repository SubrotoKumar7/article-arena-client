import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';

const WinnerCard = ({latestWinner}) => {
    const info = latestWinner;

    return (
        <div className='p-2 bg-white text-black shadow-2xl shadow-gray-600 rounded'>
            <div>
                <img className='w-full h-[250px] object-contain' src={info.winnerPhoto} alt="contest winner images" />
            </div>
            <div className='flex justify-between mt-5'>
                <div className='py-2 flex-1 pl-1'>
                    <h1 className='text-xl font-bold'>{info.winnerName}</h1>
                    <p className='italic my-1'>{info.winnerEmail}</p>
                    <p><span className='font-semibold'>Winning Date:</span> {new Date(info.createdAt).toDateString()}</p>
                </div>
                <div className="h-30 border-l-4 border-gray-300"></div>
                <div className='flex-1 pl-3'>
                    <div className='flex items-center gap-1'>
                        <BsCurrencyDollar size={25} fill='blue' />
                        <span className='font-bold text-xl'>{info.prizeMoney}</span>
                    </div>
                    <p className='mt-2'><span className='font-semibold'>Winning Contest:</span> {info.contestName}</p>
                </div>
            </div>
        </div>
    );
};

export default WinnerCard;


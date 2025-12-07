import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoMdTrophy } from 'react-icons/io';

const WinnerCard = () => {
    return (
        <div className='p-2 bg-white text-black shadow-2xl shadow-gray-600 rounded'>
            <div>
                <img className='w-full h-[250px]' src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contest winner images" />
            </div>
            <div className='flex justify-between mt-5'>
                <div className='py-2 flex-1 pl-1'>
                    <h1 className='text-xl font-bold'>John Doe</h1>
                    <p className='italic my-1'>john@mail.com</p>
                    <p><span className='font-semibold'>Winning Date:</span> 11/12/2025</p>
                </div>
                <div className="h-30 border-l-4 border-gray-300"></div>
                <div className='flex-1 pl-3'>
                    <div className='flex items-center gap-1'>
                        <BsCurrencyDollar size={25} fill='blue' />
                        <span className='font-bold text-xl'>1600</span>
                    </div>
                    <p className='mt-2'><span className='font-semibold'>Winning Contest:</span> Global Warming Awareness Contest</p>
                </div>
            </div>
        </div>
    );
};

export default WinnerCard;


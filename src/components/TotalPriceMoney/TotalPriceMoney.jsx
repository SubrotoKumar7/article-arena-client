import React from 'react';

const TotalPriceMoney = ({totalPrizeMoney}) => {
    return (
        <div className='p-2 bg-linear-to-r from-blue-500 via-blue-800 to-blue-600 text-white shadow-2xl shadow-gray-600 rounded grid place-items-center'>
            <div className='text-center'>
                <h1 className='md:text-4xl mb-2 font-bold'>Total Price Money</h1>
                <p className='text-4xl'>${totalPrizeMoney}+</p>
            </div>
        </div>
    );
};

export default TotalPriceMoney;
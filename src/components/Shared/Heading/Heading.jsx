import React from 'react';

const Heading = ({title, subtitle, position}) => {
    return (
        <div className={position}>
            <h1 className='text-2xl font-bold pb-2'>{title}</h1>
            <p className='text-sm'>{subtitle}</p>
        </div>
    );
};

export default Heading;
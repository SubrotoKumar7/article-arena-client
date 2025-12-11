import React from 'react';

const DashboardHeading = ({title, customClass, position}) => {
    return (
        <div className={position}>
            <h1 className={`text-xl font-semibold ${customClass}`}>{title}</h1>
        </div>
    );
};

export default DashboardHeading;
import React from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';
import ApprovedContestCard from '../../../../components/ApprovedContestCard/ApprovedContestCard';

const DeclareWinner = () => {
    return (
        <div>
            <DashboardHeading title={'My Approved Contest'}></DashboardHeading>
            <div className='my-10'>
                <ApprovedContestCard></ApprovedContestCard>
                <ApprovedContestCard></ApprovedContestCard>
                <ApprovedContestCard></ApprovedContestCard>
            </div>
        </div>
    );
};

export default DeclareWinner;
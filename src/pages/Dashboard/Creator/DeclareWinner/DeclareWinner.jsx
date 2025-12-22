import React from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';
import ApprovedContestCard from '../../../../components/ApprovedContestCard/ApprovedContestCard';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import Loader from '../../../../components/Loader/Loader';

const DeclareWinner = () => {
    const axiosSecure = useAxiosSecured();
    const {user} = useAuth();
    const {data: myContest = [], isLoading} = useQuery({
        queryKey: ['my-contest', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get('/my-contest?status=approved');
            return res.data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }

    return (
        <div>
            <DashboardHeading title={'Declare Contest Winner'}></DashboardHeading>
            <div className='mt-10 mb-20'>
                {
                    myContest.length > 0 ?
                    myContest.map(contest => <ApprovedContestCard key={contest._id} contest={contest}></ApprovedContestCard>)
                    :
                    <div className='flex items-center justify-center h-[70vh]'>
                        <h1 className='text-2xl font-semibold'>Your contest did not participate.</h1>
                    </div>
                }                

            </div>
        </div>
    );
};

export default DeclareWinner;
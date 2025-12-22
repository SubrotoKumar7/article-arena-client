import React from 'react';
import Container from '../../../components/Shared/Container/Container';
import Heading from '../../../components/Shared/Heading/Heading';
import WinnerCard from '../../../components/WinnerCard/WinnerCard';
import TotalWinnerCard from '../../../components/TotalWinnerCard/TotalWinnerCard';
import TotalPriceMoney from '../../../components/TotalPriceMoney/TotalPriceMoney';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecured from '../../../hooks/useAxiosSecured';
import Loader from '../../../components/Loader/Loader';

const RecentWinner = () => {
    const axiosSecure = useAxiosSecured();
    const {data: latestWinner = []} = useQuery({
        queryKey: ['recentWinner'],
        queryFn: async() => {
            const res = await axiosSecure.get('/latest-winner');
            return res.data;
        }
    });

    const {data: winnerAndPrice = {}, isLoading} = useQuery({
        queryKey: ['winnerAndPrice'],
        queryFn: async() => {
            const res = await axiosSecure.get('/winner-and-prize');
            return res.data;
        }
    });

    if(isLoading){
        return <Loader></Loader>;
    }

    

    return (
        <div className='py-10'>
            <Container>
                <Heading position={'text-center'} title={'Meet Our Recent Champions'} subtitle={'Celebrating the outstanding achievements of our winners. See who rose to the top and claimed the prize!'}></Heading>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 pt-10'>
                    <TotalWinnerCard totalWinner={winnerAndPrice.totalWinner}></TotalWinnerCard>
                    {
                        latestWinner.length > 0 ?
                        <WinnerCard latestWinner={latestWinner}></WinnerCard>
                        :
                        <div className='p-2 bg-linear-to-r from-blue-500 via-blue-700 to-blue-600 text-white shadow-2xl shadow-gray-600 rounded grid place-items-center'>
                            <h1 className='text-3xl font-bold'>No Recent Winner</h1>
                        </div>
                    }
                    <TotalPriceMoney totalPrizeMoney={winnerAndPrice.totalPrizeMoney}></TotalPriceMoney>
                </div>
            </Container>
        </div>
    );
};

export default RecentWinner;

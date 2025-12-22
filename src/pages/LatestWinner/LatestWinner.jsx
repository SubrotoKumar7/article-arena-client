import React from 'react';
import Container from '../../components/Shared/Container/Container';
import Heading from '../../components/Shared/Heading/Heading';
import useAxiosSecured from '../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';

const LatestWinner = () => {
    const axiosSecure = useAxiosSecured();
    const {data: recentWinner = [], isLoading} = useQuery({
        queryKey: ['recentWinner'],
        queryFn: async() => {
            const res = await axiosSecure.get('/latest-winner');
            return res.data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }

    
    return (
        <div className='py-10'>
            <Container>
                <Heading customClass={'text-center'} title={'Recent Winner'}></Heading>
                <div className='mt-10'>
                    {
                        recentWinner.length > 0 ?
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contest Name</th>
                                        <th>Prize Money</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recentWinner.map((win, i) => 
                                            <tr key={win._id}>
                                                <th>{i + 1}</th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                src={win.winnerPhoto}
                                                                alt="user image" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{win.winnerName}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{win.winnerEmail}</td>
                                                <td>{win.contestName}</td>
                                                <td>${win.prizeMoney}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className='flex items-center justify-center h-[30vh]'>
                            <h1 className='text-center font-semibold text-2xl'>There are currently no latest winners</h1>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
};

export default LatestWinner;
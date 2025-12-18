import React, { useState } from 'react';
import Container from '../../components/Shared/Container/Container';
import Heading from '../../components/Shared/Heading/Heading';
import ContestCard from '../../components/ContestCard/ContestCard';
import useAxiosSecured from '../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';

const AllContest = () => {
    const axiosSecure = useAxiosSecured();
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 9;

    const { data: allContest  = {}, isLoading } = useQuery({
        queryKey: ['allContest', currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/all-contest?page=${currentPage}&limit=${limit}`
            );
            return res.data;
        }
    });

    const { contests = [], totalPages = 0 } = allContest;

    if (isLoading){
        return <Loader></Loader>
    };

    const pages = [...Array(totalPages).keys()].map(p => p + 1);

    return (
        <div className="py-10">
            <Container>
                <Heading title="Explore All Contests" position="text-center" />

                <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 place-items-center">
                    {contests.map(contest => (
                        <ContestCard key={contest._id} contest={contest} />
                    ))}
                </div>

                <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">

                    <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1} className={`px-3 py-2 rounded border ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white hover:bg-blue-500 hover:text-white'}`}>Prev</button>

                    {pages.map(page => (
                        <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-2 rounded border ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-100'}`}>
                            {page}
                        </button>
                    ))}

                    <button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages}
                        className={`px-3 py-2 rounded border ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-white hover:bg-blue-500 hover:text-white'}`}>Next</button>

                </div>
            </Container>
        </div>
    );
};

export default AllContest;

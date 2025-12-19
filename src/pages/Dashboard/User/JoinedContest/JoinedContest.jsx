import React, { useRef } from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import Loader from '../../../../components/Loader/Loader';

const JoinedContest = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecured();
    const modalRef = useRef();
    const {data: myContest = [], isLoading} = useQuery({
        queryKey: ['joined-contest', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get('my-joined-contest');
            return res.data;
        }
    })

    const handleModal = () => {
        modalRef.current.showModal();
    }

    if(isLoading){
        return <Loader></Loader>
    }


    return (
        <div>
            <DashboardHeading title={'Joined Contest'}></DashboardHeading>
            <div className='py-10'>
                {
                    myContest.length > 0 ?
                
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                                <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Contest Name</th>
                                    <th>Category</th>
                                    <th>Prize Money</th>
                                    <td>Entry Fee</td>
                                    <th>Payment Status</th>
                                    <th>Contest Deadline</th>
                                    <th>Submit Task</th>
                                </tr>
                                </thead>
                            <tbody>
                                {
                                    myContest.map((contest, i)=> <tr key={contest._id}>
                                        <td>{i + 1}</td>
                                        <td>{contest.contestName}</td>
                                        <td>{contest.category}</td>
                                        <td>{contest.prizeMoney}</td>
                                        <td>{contest.price}</td>
                                        <td>Paid</td>
                                        <td>{new Date(contest.deadline).toDateString()}</td>
                                        <td>
                                            <button onClick={handleModal} className='btn btn-sm btn-primary'>Submit</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='h-[70vh] flex items-center justify-center'>
                        <h1 className='text-2xl font-semibold'>You haven't joined any contests yet.</h1>
                    </div>
                }
            </div>

            <dialog ref={modalRef}  className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Submit Contest</h3>
                    <div>
                        <form className='w-full p-2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Your Contest</legend>
                                <textarea className="textarea h-24 w-full" placeholder="write your contest here"></textarea>
                            </fieldset>
                            <div className='flex gap-2 mt-2'>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                                <button type='button' onClick={()=> modalRef.current.close()} className='btn btn-secondary'>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default JoinedContest;
import React, { useRef, useState } from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const ApproveContest = () => {
    const contestModalRef = useRef();
    const [selectedContest, setSelectedContest] = useState({});
    const axiosSecure = useAxiosSecured();
    const {data: pendingContest = [], refetch} = useQuery({
        queryKey: ['pending-contest'],
        queryFn: async()=> {
            const res = await axiosSecure.get('/pending-contest');
            return res.data;
        }
    })

    const handleContestApproval = (status, id) => {
        const contestStatus = {status: status};
        axiosSecure.patch(`/contest/${id}`, contestStatus)
        .then((res)=> {
            if(res.data.modifiedCount){
                refetch();
                if(status === 'approved'){
                    toast.success(`Contest approved successfully`);
                }
                else{
                    toast.error('Contest rejected successful');
                }
            }
        })
        .catch(err => {
            toast.error(err.message);
        })
    }

    const handleDelete = (id) => {
        axiosSecure.delete(`/contest/${id}`)
        .then(()=> {
            toast.success("Contest delete successful");
        })
        .catch(err => {
            toast.error(err.message);
        })
    }

    const handleModal = (contest) => {
        contestModalRef.current.showModal();
        setSelectedContest(contest);
    }

    return (
        <div className='mb-20'>
            <DashboardHeading title={'Manage Contest'}></DashboardHeading>
            <div className='py-10'>
                {
                    pendingContest.length > 0 ?
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Creator Info</th>
                                    <th>Contest Name</th>
                                    <th>Category</th>
                                    <th>View</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    pendingContest.map((contest, index)=> <tr key={contest._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                    src={contest?.creatorPhoto}
                                                    alt="user profile image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{contest?.creatorName}</div>
                                                <p>{contest?.creatorEmail}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{contest?.contestName}</td>
                                    <td>{contest?.category}</td>
                                    <td><button onClick={()=> handleModal(contest)} className="btn btn-primary btn-xs">details</button></td>
                                    <td className='space-x-1'>
                                        <button onClick={()=> handleContestApproval('approved', contest._id)} className="btn bg-green-500 btn-xs">Confirm</button>
                                        <button onClick={()=> handleContestApproval('rejected', contest._id)} className="btn btn-warning btn-xs">Reject</button>
                                        <button onClick={()=> handleDelete(contest._id)} className="btn bg-red-500 text-white btn-xs">Delete</button>
                                    </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='h-[70vh] flex items-center justify-center'>
                        <h1 className='text-2xl font-semibold'>No pending contests.</h1>
                    </div>
                }
            </div>

            {/* modal */}
            <dialog ref={contestModalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-center mb-2 text-lg">{selectedContest.contestName}</h3>
                    <img className='w-full h-[250px]' src={selectedContest.image} alt="" />
                    <div className='mt-5 space-y-1'>
                        <div><span className='font-semibold'>Price:</span> <span>{selectedContest.price}</span></div>
                        <div><span className='font-semibold'>Prize Money:</span> <span>{selectedContest.prizeMoney}</span></div>
                        <div><span className='font-semibold'>Deadline:</span> <span>{new Date(selectedContest.deadline).toDateString()}</span></div>
                        <div><span className='font-semibold'>Category:</span> <span>{selectedContest.category}</span></div>
                        <div><span className='font-semibold'>Created At:</span> <span>{new Date(selectedContest.createdAt).toDateString()}</span></div>
                        <div><span className='font-semibold'>Description:</span> <span>{selectedContest.description}</span></div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ApproveContest;
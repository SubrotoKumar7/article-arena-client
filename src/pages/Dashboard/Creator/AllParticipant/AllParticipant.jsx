import React, { useRef, useState } from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const AllParticipant = () => {
    const modalRef = useRef();
    const axiosSecure = useAxiosSecured();
    const {id} = useParams();
    const [selectedContest, setSelectedContest] = useState([]);
    const {data: contestParticipant = []} = useQuery({
        queryKey: ['contestAllParticipant', id],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/submit-contest/${id}`);
            return res.data;
        }
    })


    const handleModal = (contest) => {
        setSelectedContest(contest);
        modalRef.current.showModal();
    }


    return (
        <div>
            <DashboardHeading title={'Contest All Participant'}></DashboardHeading>
            <div className='py-10'>
                    {
                        contestParticipant.length > 0 ?
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contest Name</th>
                                        <th>Show Submission</th>
                                        <th>Declare Winner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        contestParticipant.map((participant, i) => <tr key={participant._id}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                        src={participant.photoURL}
                                                        alt="user profile images" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{participant.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{participant.email}</td>
                                        <td>{participant.contestName}</td>
                                        <td><button onClick={()=> handleModal(participant)} className="btn btn-secondary btn-xs">Show</button></td>
                                        <td><button className="btn btn-primary btn-xs">Winner</button></td>
                                    </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    :
                    <div className='flex items-center justify-center h-[70vh]'>
                        <h1 className='text-2xl font-semibold'>There are no participants in this contest.</h1>
                    </div>
                }


            </div>

            {/* modal */}
            <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{selectedContest.contestName}</h3>
                    <p className="py-4">{selectedContest.submittedContest}</p>

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

export default AllParticipant;
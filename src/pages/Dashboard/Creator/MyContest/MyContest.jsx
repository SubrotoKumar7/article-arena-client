import React, { useRef, useState } from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const MyContest = () => {
    const {user} = useAuth();
    const modalRef = useRef();
    const [selectedContest, setSelectedContest] = useState({});
    const axiosSecure = useAxiosSecured();
    const {data: myContest = [], refetch} = useQuery({
        queryKey: ["my-contest", user?.email],
        queryFn: async() => {
            const result = await axiosSecure.get('/my-contest');
            return result.data;
        }
    })

    const handleDeleteContest = (id) => {
        
        Swal.fire({
        title: "Are you sure?",
        text: 'Yon want to delete contest',
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
        }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/contest/${id}`)
            .then((res) => {
                if(res.data.deletedCount){
                    Swal.fire({
                    title: "Successful!",
                    text: "Contest remove successfully.",
                    icon: "success"
                    });
                    refetch();
                };
            })
            .catch(err=> {
                toast.error(err.message);
            })
        }
        });
    }

    const handleModal = (contest) => {
        setSelectedContest(contest);
        modalRef.current.showModal();
    }


    return (
        <div>
            <DashboardHeading title={'My Contest'} ></DashboardHeading>
            <div className='py-10'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Contest Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myContest.map((contest, index) => <tr key={contest._id}>
                                    <th>{index + 1}</th>
                                    <td>{contest.contestName}</td>
                                    <td>{contest.category}</td>
                                    <td>{contest.status}</td>
                                    <td>
                                        {
                                            contest.status === "pending" ? 
                                            <>
                                                <Link to={`/dashboard/edit-contest/${contest._id}`} className='btn btn-primary btn-sm mr-1'>Edit</Link>
                                                <button onClick={()=> handleDeleteContest(contest._id)} className='btn bg-red-500 text-white btn-sm'>Delete</button>
                                            </>
                                            :
                                            <button onClick={() => handleModal(contest)} className='btn btn-primary btn-sm mr-1'>submission</button>
                                        }
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Contest Details</h3>
                    <div className='py-5'>
                        <img className='mb-4 w-full' src={selectedContest.image} alt="contest image" />
                        <h1 className='text-2xl font-semibold'>{selectedContest.contestName}</h1>
                        <p><span className='font-bold'>Category: </span>{selectedContest.category}</p>
                        <p><span className='font-bold'>Entry Fee:</span> {selectedContest.price}</p>
                        <p><span className='font-bold'>Prize Money:</span> {selectedContest.prizeMoney}</p>
                        <p><span className='font-bold'>Contest Status:</span> {selectedContest.status}</p>
                        <p><span className='font-bold'>Description:</span> {selectedContest.description}</p>
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

export default MyContest;
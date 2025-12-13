import React, { useRef } from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';

const ApproveContest = () => {
    const contestModalRef = useRef();

    const handleModal = () => {
        contestModalRef.current.showModal();
    }

    return (
        <div>
            <DashboardHeading title={'Manage Contest'}></DashboardHeading>
            <div className='py-10'>
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
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="user profile image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">John Doe</div>
                                            <p>john@mail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Future of AI in Daily Life</td>
                                <td>AI</td>
                                <td><button onClick={handleModal} className="btn btn-primary btn-xs">details</button></td>
                                <td className='space-x-1'>
                                    <button className="btn bg-green-500 btn-xs">Confirm</button>
                                    <button className="btn btn-warning btn-xs">Reject</button>
                                    <button className="btn bg-red-500 text-white btn-xs">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* modal */}
            <dialog ref={contestModalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-center mb-2 text-lg">Contest Name</h3>
                    <img className='w-full h-[250px]' src="https://img.freepik.com/free-photo/futuristic-ai-chip-circuit-board_23-2151977487.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    <div className='mt-5 space-y-1'>
                        <div><span className='font-semibold'>Price:</span> <span>50</span></div>
                        <div><span className='font-semibold'>Prize Money:</span> <span>5000</span></div>
                        <div><span className='font-semibold'>Deadline:</span> <span>30/12/2025</span></div>
                        <div><span className='font-semibold'>Category:</span> <span>AI</span></div>
                        <div><span className='font-semibold'>Created At:</span> <span>20/12/2025</span></div>
                        <div><span className='font-semibold'>Description:</span> <span>Participants must write an evidence-based article explaining how healthy habits are formed and how individuals can build long-term discipline. Articles may explore habit psychology, neuroscience, lifestyle design, and real-life success strategies. Your writing should inspire readers to improve their lives while staying grounded in scientific principles</span></div>

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
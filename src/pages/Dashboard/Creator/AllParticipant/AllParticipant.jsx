import React, { useRef } from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';

const AllParticipant = () => {
    const modalRef = useRef();

    const handleModal = () => {
        modalRef.current.showModal();
    }

    return (
        <div>
            <DashboardHeading title={'Contest All Participant'}></DashboardHeading>
            <div className='py-10'>
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

                            <tr>
                                <th>1</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="user profile images" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">John Doe</div>
                                        </div>
                                    </div>
                                </td>
                                <td>john@mail.com</td>
                                <td>Global Warming Awareness Contest</td>
                                <td><button onClick={handleModal} className="btn btn-secondary btn-xs">Show</button></td>
                                <td><button className="btn btn-primary btn-xs">Winner</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* modal */}
            <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Contest Name</h3>
                    <p className="py-4">Participants must write an evidence-based article explaining how healthy habits are formed and how individuals can build long-term discipline. Articles may explore habit psychology, neuroscience, lifestyle design, and real-life success strategies. Your writing should inspire readers to improve their lives while staying grounded in scientific principles</p>

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
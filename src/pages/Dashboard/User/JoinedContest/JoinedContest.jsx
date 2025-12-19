import React, { useRef } from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';

const JoinedContest = () => {
    const modalRef = useRef();

    const handleModal = () => {
        modalRef.current.showModal();
    }

    return (
        <div>
            <DashboardHeading title={'Joined Contest'}></DashboardHeading>
            <div className='py-10'>
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
                            <tr>
                                <td>1</td>
                                <td>Global Warming Awareness Contest</td>
                                <td>Environment</td>
                                <td>2000</td>
                                <td>50</td>
                                <td>Paid</td>
                                <td>20/1/2026</td>
                                <td>
                                    <button onClick={handleModal} className='btn btn-sm btn-primary'>Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
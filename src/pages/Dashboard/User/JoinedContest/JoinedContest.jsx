import React from 'react';
import DashboardHeading from '../../../../components/Shared/DashboardHeading/DashboardHeading';

const JoinedContest = () => {
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default JoinedContest;
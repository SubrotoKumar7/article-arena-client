import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import Container from '../../../../components/Shared/Container/Container';
import Heading from '../../../../components/Shared/Heading/Heading';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const axiosSecure = useAxiosSecured();

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleRoleUpdate = async(email, role) => {
        const info = {
            email,
            role
        }

        Swal.fire({
        title: "Are you sure?",
        text: `You want to make him ${role}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
        }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.patch(`/users`, info)
            .then(res=> {
                if(res.data.modifiedCount){
                    Swal.fire({
                    title: "Successful!",
                    text: "This person role is update.",
                    icon: "success"
                    });
                    refetch();
                }
            })
            .catch(err=> {
                toast.error(err.message);
            })
        }
        });

    }


    return (
        <div>
            <Container>
                <Heading customClass={'text-xl font-semibold'} title={'All Users'}></Heading>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) => 
                                        <tr key={user._id}>
                                            <th>{i + 1}</th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                            src={user?.photoURL}
                                                            alt="user image" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{user?.displayName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{user?.email}</td>
                                            <td>{user?.role}</td>
                                            <td className='flex items-center gap-1'>
                                                <button onClick={()=> handleRoleUpdate(user?.email, "admin")} className='btn btn-sm btn-primary'>admin</button>

                                                <button onClick={()=> handleRoleUpdate(user?.email, "creator")} className='btn btn-sm btn-secondary'>creator</button>

                                                <button onClick={()=> handleRoleUpdate(user?.email, "user")} className='btn btn-sm btn-accent'>user</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AllUsers;
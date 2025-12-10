import React from 'react';
import useAuth from './useAuth';
import useAxiosSecured from './useAxiosSecured';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecured();

    const {data: role = "user", isLoading: roleLoading} = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/users/${user?.email}/role`);
            return res.data;
        }
    })

    return {role, roleLoading};
};

export default useRole;
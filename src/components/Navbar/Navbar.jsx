import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../Shared/Logo/Logo';
import Container from '../Shared/Container/Container';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const {user, logoutUser} = useAuth();

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-contests'}>All Contests</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    </>

    const handleLogout = () => {
        logoutUser()
        .then(()=> {
            toast.success("Logout successful")
        })
        .catch(err => {
            toast.error(err.message);
        })
    }

    return (
        <div className=" bg-white sticky z-50 top-0 shadow-sm">
            <Container>
                <div className="navbar my-1">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div>
                            <Logo></Logo>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                            {links}
                            </ul>
                        </div>
                        {
                            user ?
                            <div className="dropdown dropdown-end p-2">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                    <img
                                        referrerPolicy='no-referrer'
                                        src={user?.photoURL} alt='user image' />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li className='text-center font-semibold'>{user?.displayName}</li>
                                    <li className='text-center'>{user?.email}</li>
                                    <li className='my-2'><button onClick={handleLogout} className='btn btn-primary btn-sm'>Logout</button></li>
                                </ul>
                            </div>
                            :
                            <Link className='btn-primary btn' to={'/login'}>Login</Link>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
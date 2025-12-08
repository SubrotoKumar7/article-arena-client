import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import Logo from '../Shared/Logo/Logo';
import Container from '../Shared/Container/Container';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const location = useLocation();


    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            const scroll = window.scrollY;
            if(scroll > 0){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        })
    }, [isScroll])

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-contests'}>All Contests</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    return (
        <div className={`${location.pathname === '/' ? 'fixed top-0 left-0 w-full z-50 md:text-white' : 'static text-black'} py-2  ${isScroll ? 'bg-base-100 text-black!' : 'bg-transparent shadow-sm'}`}>
            <Container>
                <div className="navbar my-1">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${!(location.pathname === '/') && 'text-black' || isScroll ? 'text-black' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div className={`${!(location.pathname === '/') && 'text-black' || isScroll ? "text-black" : "text-white"}`}>
                            <Logo></Logo>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                            {links}
                            </ul>
                        </div>
                        <Link className='btn-primary btn' to={'/login'}>Login</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
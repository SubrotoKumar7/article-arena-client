import React from 'react';
import Logo from '../components/Shared/Logo/Logo';
import { NavLink, Outlet } from 'react-router';
import { FaUserCog, FaUserFriends } from 'react-icons/fa';
import { IoHome, IoSettingsSharp } from 'react-icons/io5';
import { RiArticleFill, RiSidebarFoldFill } from "react-icons/ri";


const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <RiSidebarFoldFill className="my-1.5 inline-block size-4" />
                        </label>
                        <div className="px-4"><Logo></Logo></div>
                    </nav>

                    {/* main content */}
                    <div className="p-4">
                        <Outlet></Outlet>
                    </div>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">

                        {/* menubar */}
                        <ul className="menu w-full grow">
                            <li>
                                <NavLink to={'/dashboard'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                    {/* Home icon */}
                                    <IoHome className="my-1.5 inline-block size-4"></IoHome> 
                                    <span className="is-drawer-close:hidden">Homepage</span>
                                </NavLink>
                            </li>

                            {/* admin only routes */}
                            <li>
                                <NavLink to={'/dashboard/all-users'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="All Users">
                                    <FaUserFriends className="my-1.5 inline-block size-4" />
                                    <span className="is-drawer-close:hidden">All Users</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/dashboard/approve-contest'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Contest">
                                    <RiArticleFill className="my-1.5 inline-block size-4" />
                                    <span className="is-drawer-close:hidden">Approve Contest</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/dashboard/special-users'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Special Users">
                                    <FaUserCog className="my-1.5 inline-block size-4" />
                                    <span className="is-drawer-close:hidden">Special Users</span>
                                </NavLink>
                            </li>


                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                    <IoSettingsSharp className="my-1.5 inline-block size-4" />
                                    <span className="is-drawer-close:hidden">Settings</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
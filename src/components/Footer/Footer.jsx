import React from 'react';
import Logo from '../Shared/Logo/Logo';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    
    return (
        <div className='bg-black text-white'>
            <footer className="footer sm:footer-horizontal p-10">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="footer gap-2 px-10 py-4">
                    <aside className="grid-flow-col items-center">
                        <div>
                            <Logo></Logo>
                        </div>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                        <a target='_blank' className='flex items-center gap-1' href="https://github.com/SubrotoKumar7"><FaGithubSquare size={20} /> Github</a>
                        
                        <a target='_blank' className='flex items-center gap-1' href="https://www.linkedin.com/in/subrotokumar7/"><FaLinkedin size={20} /> Linkedin</a>

                        <a target='_blank' className='flex items-center gap-1' href="https://www.facebook.com/subrotokumar17"><FaFacebookSquare size={20} /> Facebook</a>
                        </div>
                    </nav>
                </footer>
            <div className='text-center text-sm w-full pb-5'>Copyright © {new Date().getFullYear()} Article Arena</div>
        </div>
    );
};

export default Footer;
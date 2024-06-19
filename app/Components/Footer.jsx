import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo_light.png'
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                    <div className="col-span-full lg:col-span-2">
                        {/* <!-- logo - start --> */}
                        <div className="mb-4 lg:-mt-2">
                            <Link href="/" aria-label="logo">
                                <Image src={logo} />
                            </Link>
                        </div>
                        {/* <!-- logo - end --> */}

                    </div>

                    {/* <!-- nav - start --> */}
                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Explore</div>

                        <nav className="flex flex-col gap-4">
                            
                                <a href="#" className="text-sm sm:text-base text-gray-400 transition duration-100 hover:text-indigo-500">Features</a>
                            

                            
                                <a href="#" className="text-sm sm:text-base text-gray-400 transition duration-100 hover:text-indigo-500">Pricing</a>
                            

                            
                                <a href="#" className="text-sm sm:text-base text-gray-400 transition duration-100 hover:text-indigo-500">Testimonials</a>
                            

                        </nav>
                    </div>
                    {/* <!-- nav - end --> */}

                    {/* <!-- nav - start --> */}
                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Company</div>

                        <nav className="flex flex-col gap-4">
                           
                                <Link href="/about" className="text-sm sm:text-base text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</Link>
                            

                            
                                <a href="#" className="text-sm sm:text-base text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy</a>
                            

                            
                                <a href="#" className="text-sm sm:text-base text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms</a>
                            

                            
                        </nav>
                    </div>
                    {/* <!-- nav - end --> */}

                    {/* <!-- nav - start --> */}
                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Help</div>

                        <nav className="flex flex-col gap-4">
                            
                                <a href="#" className="text-sm sm:text-base text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Support</a>
                           
                         
                                <a href="#" className="text-sm sm:text-base text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                           

                           
                                <Link href="/contact" className="text-sm sm:text-base text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</Link>
                            

                        </nav>
                    </div>
                    {/* <!-- nav - end --> */}

                    {/* <!-- nav - start --> */}
                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Follow Us</div>

                        <nav className="flex gap-4 text-white">
                            <FaFacebookF size={20} />
                            <FaXTwitter size={20}/>
                            <FaInstagram size={20} />
                        </nav>
                    </div>
                    {/* <!-- nav - end --> */}
                </div>

                <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">© Connectly 2024, All Rights Reserved</div>
            </footer>
        </div>
    )
}

export default Footer
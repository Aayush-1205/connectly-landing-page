'use client'
import React, { useState } from 'react'
import logo from '../assets/logo_dark.png'
import { FiMenu } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false)
    }


    return (
        <div className='sticky top-0 z-40 shadow-md shadow-[#f4504496]'>
            <div className="mx-auto bg-[#EDEDED] max-w-screen-2xl px-4 md:px-8 ">
                <header className="flex items-center justify-between py-4 md:py-8">
                    {/* <!-- logo - start --> */}
                    <div>
                        <Image src={logo} className='w-20' />
                    </div>
                    {/* <!-- logo - end --> */}

                    {/* <!-- nav - start --> */}
                    <nav className="hidden gap-12 lg:flex">
                        <Link href="/" className="text-lg font-semibold text-gray-600 hover:text-[#F45044] focus:text-[#F45044]">Home</Link>
                        <Link href="/how-it-works" className="text-lg font-semibold text-gray-600 transition duration-100 focus:text-[#F45044] hover:text-[#F45044]">How It Works</Link>
                        <Link href="/about" className="text-lg font-semibold text-gray-600 transition duration-100 focus:text-[#F45044] hover:text-[#F45044]">About</Link>
                    </nav>
                    {/* <!-- nav - end --> */}

                    {/* <!-- buttons - start --> */}
                    <Link href="/contact" className="hidden rounded-full bg-[#F45044] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#00AEF0] focus-visible:ring md:text-base lg:inline-block">Contact Us</Link>

                    <button type="button" onClick={toggleMenu} className="lg:hidden">
                        <FiMenu size={25} />
                    </button>
                    {/* <!-- buttons - end --> */}
                </header>
                {/* <!-- features section - start --> */}
                {isMenuOpen && (
                    <div className="fixed top-0 right-0 z-50 h-full w-full bg-white bg-opacity-50 backdrop-blur-md shadow-lg lg:hidden overflow-auto">
                        <div className="flex items-center justify-end p-4 ">
                            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 text-right">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex flex-col p-4 gap-3 items-center justify-center">
                            <Link href="/" onClick={closeMenu} className="text-lg font-semibold text-gray-600 transition duration-100 focus:text-[#F45044] hover:text-[#F45044]">Home</Link>
                            <Link href="/about" onClick={closeMenu} className="text-lg font-semibold text-gray-600 transition duration-100 focus:text-[#F45044] hover:text-[#F45044]">About</Link>
                            <Link href="/how-it-works" onClick={closeMenu} className="text-lg font-semibold text-gray-600 transition duration-100 focus:text-[#F45044] hover:text-[#F45044]">How It Works</Link>

                            {/* <!-- buttons - start --> */}
                            <Link href="/contact" onClick={closeMenu} className="rounded-full bg-[#E1767C] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#00AEF0] focus-visible:ring w-full">Contact Us</Link>
                        </nav>
                    </div>
                )}
                {/* <!-- features section - end --> */}
            </div>
        </div>
    )
}

export default Navbar
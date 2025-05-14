"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import Auth from './Auth'


import NavLink from './NavLink'

const Navbar = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);

    const handleBurgerClick = () => {
        setBurgerOpen(!burgerOpen);
        console.log(burgerOpen)
    }

    return (
        <>
            <div className='flex justify-center'>
                <nav className='w-[95%] flex justify-between px-2 py-4 border-b-1 border-gray-600  bg-white/85 backdrop-blur-sm fixed z-50'>
                    <div className='flex items-center text-2xl'>
                        <Link href={'/'}><h1 className='text-gradient font-extrabold'>PingVerse</h1></Link>
                        
                    </div>
                    <div className='flex gap-4'>
                        <div className="hidden md:flex gap-5 text-md items-center">
                            <NavLink href='#features'>Features</NavLink>
                            <NavLink href='#working'>How it works</NavLink>
                            <NavLink href='#testimonials'>Testimonials</NavLink>
                            {/* links */}
                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className='hidden md:inline'>
                                <Auth/>
                            </div>

                            <button className='md:hidden' onClick={handleBurgerClick}><GiHamburgerMenu fontSize={20} /></button>
                            
                        </div>
                    </div>

                    
                </nav>
                <div
                        className={`top-[65px] fixed left-0 w-full  px-6 py-4 flex flex-col gap-4 md:hidden z-50 transform transition-transform duration-300 ease-in-out ${burgerOpen ? 'translate-y-0 bg-white/75 backdrop-blur-xl' : '-translate-y-10 opacity-0 pointer-events-none '
                            }`}
                    >
                        <Link href="/" onClick={() => setBurgerOpen(false)}>Features</Link>
                        <Link href="/products" onClick={() => setBurgerOpen(false)}>How it works</Link>
                        <Link href="/contact" onClick={() => setBurgerOpen(false)}>Testimonials</Link>
                        <div className=''>
                            <Auth/>
                        </div>
                        
                    </div>
            </div>
        </>
    )
}

export default Navbar
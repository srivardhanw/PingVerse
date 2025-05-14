"use client"
import React, { useState } from 'react'
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs'
import { useChatContext } from '../../contexts/ChatProvider';

const UserProfile = () => {
  const { isLoaded, isSignedIn } = useUser();

  const { activeSidebarButton, setActiveSidebarButton } = useChatContext();
  const { isSearchOpen, setIsSearchOpen } = useChatContext();

  const btns = [
    { id: 'search', icon: <FaSearch fontSize={28} /> },
    { id: 'chat', icon: <AiFillMessage fontSize={28} /> },
    { id: 'settings', icon: <BsGearFill fontSize={28} /> },
  ]


  const handleSidebarClick = async (id: string) => {
    setActiveSidebarButton(id);

    if (id === 'search') {
      setIsSearchOpen(!isSearchOpen);
    } else {
      setIsSearchOpen(false);
    }
  }

  return (
    <div className='bg-[var(--primary)] col-span-2 md:col-span-1 row-span-12 h-full pt-8 min-w-[50px]'>
      <div className='flex flex-col gap-5 items-center '>
        <SignedIn >
          {isLoaded && <UserButton />}
        </SignedIn>
        {!isLoaded && <FaUserCircle fontSize={28} className="text-white mb-1" />}
        <SignedOut>
          <FaUserCircle fontSize={28} className="text-white mb-1" />
        </SignedOut>
        <div className='w-full'>
          {btns.map((btn) => (
            <button key={btn.id} onClick={() => handleSidebarClick(btn.id)} className={`flex justify-center w-full py-8 transition 
              ${activeSidebarButton === btn.id ? 'text-white md:bg-[var(--accent)]' : 'text-[var(--accent)] hover:text-black'}`}>
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
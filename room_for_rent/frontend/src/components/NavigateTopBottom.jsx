import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { IoMdNotifications } from "react-icons/io";
import { FaSearchengin } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function NavigateTop() {
    const [active,setActive]=useState('home');
    useEffect(function(){
     const pathname= window.location.pathname.split('/')[1];
     setActive(pathname);
    },[active])
  return (
    <nav className='border-t drop-shadow-md py-4 px-3 fixed w-full bottom-0 sm:px-16 lg:hidden'>
    <ul className='flex gap-3 justify-between'>
      <li className=''>
        <NavLink to="/home" className={`flex flex-col justify-center items-center ${active==='home' ? 'text-blue-400':''} `}>
             <FaHome className='text-[25px]'/><span className='text-[14px]'>Home</span>
         </NavLink>
      </li>
      <li>
        <NavLink to="/card" className={`flex flex-col justify-center items-center ${active==='card' ? 'text-blue-400':''} `}>
             <MdFavorite className='text-[25px]'/><span className='text-[14px]'>Card</span>
         </NavLink>
      </li>
      <li>
        <NavLink to="/order" className={`flex flex-col justify-center items-center ${active==='order' ? 'text-blue-400':''} `}>
             <FaBook className='text-[25px]'/><span className='text-[14px]'>Order</span>
         </NavLink>
      </li>
      <li>
        <NavLink to="/member" className={`flex flex-col justify-center items-center ${active==='member' ? 'text-blue-400':''} `}>
        <FaPeopleRoof className='text-[25px]'/><span className='text-[14px]'>Member</span>
         </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={`flex flex-col justify-center items-center ${active==='profile' ? 'text-blue-400':''} `}>
             <BsFillPersonLinesFill  className='text-[25px]'/><span className='text-[14px]'>Profile</span>
         </NavLink>
      </li>
      
      
    </ul>
 </nav>

  )
}

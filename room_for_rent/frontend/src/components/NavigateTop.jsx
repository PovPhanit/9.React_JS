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
    <nav className=' py-4 px-6 border-b border-slate-200 fixed w-full top-0 sm:px-10 md:px-30'>
    <div className='lg:flex lg:justify-between  w-full'>
        <div className='flex justify-between gap-5'>
        <form action="" className='relative'>
          <input type="text" className='indent-8 text-lg p-1 outline-none border  rounded-[20px] w-[105%] sm:w-[500px] md:w-[700px] lg:w-[420px]' name="" id="" placeholder='Search...' />
          <FaSearchengin className='absolute top-[-2px] left-2 text-xl text-blue-400 translate-y-[50%]'/>
        </form>
        <Link to="" className='text-blue-400 text-[37px]'><IoMdNotifications /></Link>
        </div>
        <ul className='hidden lg:block lg:flex lg:gap-12'>
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
    </div>
 </nav>

  )
}

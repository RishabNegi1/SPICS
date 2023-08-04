import React, { useState } from 'react'
import {PiGooglePhotosLogoFill} from "react-icons/pi";
import {CgCloseO} from "react-icons/cg";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=' bg-[#f5e6aa]'>
    <div className=' p-4 items-center h-24 max-w-[1240px] mx-auto sticky top-0'>
        <div className=' flex justify-between'>
        <h1 className=' text-3xl font-bold text-[#7aa0b4] m-3'>S <span className=' text-[#e20577]'>PICS</span></h1>
        {
          toggle?
          <CgCloseO onClick={()=>setToggle(!toggle)} className=' cursor-pointer text-4xl m-3 md:hidden block'/>
          :
          <PiGooglePhotosLogoFill onClick={()=>setToggle(!toggle)} className=' cursor-pointer text-4xl m-3 md:hidden block'/>
        }
        
        <ul className='hidden md:flex text-xl font-bold text-[#6b8b92] gap-7 m-3'>
        <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>GALLERY</li>
        <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>EXPLORE</li>
        <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>SOCIALS</li>
        <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
        <NavLink to={'/up'}>UPLOAD</NavLink></li>
      </ul>

      <ul className={` duration-300 p-10 md:hidden text-xl fixed w-full h-screen top-[98px] font-bold text-orange-200 bg-neutral-800
       ${toggle ? 'left-[0]' : 'left-[-100%]'}
      `}>
        <li className='p-5'>GALLERY</li>
        <li className='p-5'>EXPLORE</li>
        <li className='p-5'>SOCIALS</li>
        <li className='p-5'><NavLink to={'/up'}>UPLOAD</NavLink></li>
      </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar
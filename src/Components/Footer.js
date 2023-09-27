import React from 'react';
import { AiOutlineInstagram, AiFillFacebook, AiFillTwitterSquare, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-900 font-serif mt-auto'>
      <div className='max-w-[1200px] mx-auto grid grid-rows-3 text-slate-200'>
        <div className='row-span-1 mt-4'>
          <div className='flex justify-center'>
            <p className='p-2'><FaMapMarkedAlt className='h-6 w-6 cursor-pointer' /></p>
            <p className='font-normal text-xl'>725 S. Mission St
            Sapulpa, Oklahoma 74066</p>
          </div>
          <div className='flex justify-center'>
            <p className='p-2'><AiOutlinePhone className='h-6 w-6 cursor-pointer' /></p>
            <p className='font-normal text-xl'>(479) 876-8721</p>
          </div>
        </div>
        <div className='row-span-1 mt-4'>
          <h1 className='text-lg'>Connect with us</h1>
          <div className='flex justify-center p-4'>
            <p className='p-2'><AiOutlineInstagram className='h-6 w-6 cursor-pointer' /></p>
            <p className='p-2'><AiFillFacebook className='h-6 w-6 cursor-pointer' /></p>
            <p className='p-2'><AiFillTwitterSquare className='h-6 w-6 cursor-pointer' /></p>
          </div>
        </div>
        <div className='row-span-1 mt-4'>
          <p className='text-base md:text-xl font-semibold text-slate-200'>© 2023 SPICS All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;

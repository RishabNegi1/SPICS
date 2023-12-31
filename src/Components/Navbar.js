import React, { useState } from 'react';
import { PiGooglePhotosLogoFill } from 'react-icons/pi';
import { CgCloseO } from 'react-icons/cg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav
      className='bg-[#f5e6aa] relative z-10' 
    >
      <div className='p-4 items-center h-24 max-w-[1240px] mx-auto top-0'>
        <div className='flex justify-between'>
          <Link to='/'>
            <h1 className='text-3xl font-bold text-[#7aa0b4] m-3'>
              S <span className='text-[#e20577]'>PICS</span>
            </h1>
          </Link>
          {toggle ? (
            <CgCloseO
              onClick={() => setToggle(!toggle)}
              className='cursor-pointer text-4xl m-3 md:hidden block'
            />
          ) : (
            <PiGooglePhotosLogoFill
              onClick={() => setToggle(!toggle)}
              className='cursor-pointer text-4xl m-3 md:hidden block'
            />
          )}

          <ul className='hidden md:flex text-xl font-bold text-[#6b8b92] gap-7 m-3'>
            <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
            <NavLink to={'/'}>Explore</NavLink>
            </li>
            <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
              Socials
            </li>
            {user?.email ? (
              <>
                <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
                  <NavLink to={'/up'}>Upload</NavLink>
                </li>
                <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
                  <NavLink to={'/account'}>Account</NavLink>
                </li>
                <li
                  onClick={handleLogout}
                  className='p-2 cursor-pointer hover-bg-[#c9afb2] rounded-full'
                >
                  LogOut
                </li>
              </>
            ) : (
              <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
                <NavLink to={'/join'}>SignUp</NavLink>
              </li>
            )}
          </ul>

          <ul
            className={`duration-300 p-10 md:hidden text-xl fixed w-full h-screen top-[98px] font-bold text-orange-200 bg-neutral-800
       ${toggle ? 'left-[0]' : 'left-[-100%]'}
      `}
          >
            <li className='p-5'><NavLink to={'/'}>Explore</NavLink></li>
            <li className='p-5'>Socials</li>
            {user?.email ? (
              <>
                <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
                  <NavLink to={'/up'}>Upload</NavLink>
                </li>
                <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
                  Account
                </li>
                <li
                  onClick={handleLogout}
                  className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'
                >
                  LogOut
                </li>
              </>
            ) : (
              <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
                <NavLink to={'/join'}>SignUp</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

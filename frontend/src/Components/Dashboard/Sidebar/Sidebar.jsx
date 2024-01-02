import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiDashboard2Fill } from 'react-icons/ri';
import logo from '../../../../public/images/logo.png';
import { GiGlassShot } from 'react-icons/gi';
import { BiSolidCategory } from 'react-icons/bi';
import { FaRegNewspaper } from 'react-icons/fa6';
import { MdAccountCircle } from 'react-icons/md';
import { MdAddBusiness } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className='bg-white shadow-2xl h-[100vh] fixed w-[19%] flex flex-col items-center py-4 gap-14'>
      <div>
        <img src={logo} alt="" className='h-[50px] ml-3' />
      </div>
      <div className='flex flex-col gap-5'>
        <Link
          to='/dashboard'
          className={`flex items-center ${
            location.pathname === '/dashboard'
              ? 'bg-[#3f691f] text-white'
              : 'text-black bg-white'
          } px-2 py-2 gap-2 rounded-md hover:pl-3 transform transition-all duration-300 ease-in-out `}
        >
          <RiDashboard2Fill className='text-[20px]' />
          <p className='text-[16px] font-semibold'>Dashboard</p>
        </Link>
        <Link
          to='/dashboard/requests'
          className={`flex items-center ${
            location.pathname === '/dashboard/requests'
              ? 'bg-[#3f691f] text-white'
              : 'text-black bg-white'
          } px-2 py-2 gap-2 rounded-md hover:pl-3 transform transition-all duration-300 ease-in-out`}
        >
          <MdAddBusiness className='text-[20px]' />
          <p className='text-[18px] font-semibold'>Requests</p>
        </Link>
        <Link
          to='/dashboard/location'
          className={`flex items-center ${
            location.pathname === '/dashboard/location'
              ? 'bg-[#3f691f] text-white'
              : 'text-black bg-white'
          } px-2 py-2 gap-2 rounded-md hover:pl-3 transform transition-all duration-300 ease-in-out`}
        >
          <FaLocationDot className='text-[20px]' />
          <p className='text-[18px] font-semibold'>Location</p>
        </Link>
        <Link
          to='/dashboard/newsletters'
          className={`flex items-center ${
            location.pathname === '/dashboard/newsletters'
              ? 'bg-[#3f691f] text-white'
              : 'text-black bg-white'
          } px-2 py-2 gap-2 rounded-md hover:pl-3 transform transition-all duration-300 ease-in-out w-[160px] `}
        >
          <FaRegNewspaper className='text-[20px]' />
          <p className='text-[18px] font-semibold'>NewsLetter</p>
        </Link>
        <Link
          to='/dashboard/menu'
          className={`flex items-center ${
            location.pathname === '/dashboard/menu'
              ? 'bg-[#3f691f] text-white'
              : 'text-black bg-white'
          } px-2 py-2 gap-2 rounded-md hover:pl-3 transform transition-all duration-300 ease-in-out`}
        >
          <TiThMenu className='text-[20px]' />
          <p className='text-[18px] font-semibold'>Menu</p>
        </Link>
        <Link
          to='/dashboard/addseries'
          className={`flex items-center ${
            location.pathname === '/dashboard/addseries'
              ? 'bg-[#3f691f] text-white'
              : 'text-black bg-white'
          } px-2 py-2 gap-2 rounded-md hover:pl-3 transform transition-all duration-300 ease-in-out`}
        >
          <BiSolidCategory className='text-[20px]' />
          <p className='text-[18px] font-semibold'>Series</p>
        </Link>
        <Link
          to='/dashboard/add-drinks'
          className={`flex items-center ${
            location.pathname === '/dashboard/add-drinks'
              ? 'bg-[#3f691f] text-white'
              : 'text-black bg-white'
          } px-2 py-2 gap-2 rounded-md hover:pl-3  w-[180px] transform transition-all duration-300 ease-in-out`}
        >
          <GiGlassShot className='text-[20px]' />
          <p className='text-[18px] font-semibold'>Drinks</p>
        </Link>

        {/* <Link
          to='/dashboard/profile'
          className={`flex items-center ${
            location.pathname === '/dashboard/profile'
              ? 'bg-[#3f691f] text-white'
              : 'text-black bg-white'
          } px-2 py-2 gap-2 rounded-md hover:pl-3 transform transition-all duration-300 ease-in-out`}
        >
          <MdAccountCircle className='text-[24px]' />
          <p className='text-[18px] font-semibold'>Profile</p>
        </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;

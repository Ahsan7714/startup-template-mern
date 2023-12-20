import React from 'react'
import flogo from '../../assets/f-logo.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiTiktokFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='bg-[#3f691f] text-white'>
        <div className='pt-[6%] px-[10%] flex flex-col gap-5'>
            <img src={flogo} alt="" className='h-[80px] w-[170px]'/>
            <div className='flex flex-col lg:flex-row border-t-[1px] border-[#ffffffa5] gap-20 lg:gap-40'>
                <div className='flex flex-col gap-1 pt-7 pl-12 pr-[16%]'>
                    <p className='text-[24px]  font-extralight'>CONTACT</p>
                    <p className='text-[20px] underline underline-offset-2 font-extralight '>info@rbteausa.com</p>
                    <p className='text-[24px]  font-extralight py-5'>Links</p>
                    <p className='text-[16px] text-[#ffffffdc] cursor-pointer underline underline-offset-2 font-extralight '>Terms & Conditions</p>
                    <p className='text-[16px] text-[#ffffffdc] cursor-pointer underline underline-offset-2 font-extralight '>Privacy Policy</p>
                    <p className='text-[16px] text-[#ffffffdc] cursor-pointer underline underline-offset-2 font-extralight '>Cookies Policy</p>
                </div>
                <div className='border-l-[1px] lg:pt-7 border-[#ffffffa5] pl-10 h-[20vh] lg:h-[40vh] flex flex-col gap-4'>
                    <p className='text-[24px]  font-extralight'>FOLLOW</p>
                    <div className='flex text-[40px] gap-2'>
                    <BsInstagram className=' cursor-pointer'/>
                    <FaSquareFacebook className=' cursor-pointer' />
                    <RiTiktokFill className=' cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <p className='flex items-center justify-center text-[14px] text-[#ffffffdc] font-light text-center'>©Copyright 2019-2024 R&B Tea - All Rights Reserved. Home | Accessibility</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
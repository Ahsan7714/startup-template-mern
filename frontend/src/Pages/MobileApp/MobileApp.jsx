import React from 'react'
import bgy from  '../../assets/bg-mb.png';
import mobile from '../../assets/mobile.png'
import googleplay from '../../assets/googleplay.png'
import people from '../../assets/people.png'
import notification from '../../assets/notification.png'
import discount from '../../assets/discount.png'
import payment from '../../assets/payment.png'
import dollar from '../../assets/dollar.png'
import badge from '../../assets/badge.png'



const MobileApp = () => {
  return (
    <div className='mb-[220%] lg:mb-[15%]'>
        <img src={bgy} alt="" className='h-[200vh] lg:w-[30%] w-[60%] relative'/>
        <div className='flex'>
            <div>
                <img src={mobile} alt="" className='absolute lg:top-36 lg:left-40 left-10 top-32'/>
            </div>
            <div className='absolute top-[80%] left-[10%] lg:top-[35%] lg:left-[50%] flex flex-col '>
            <h1 className='text-[#3f691f] lg:text-[50px] text-[40px] font-extrabold pb-5'>COMING SOON</h1>
            <p className='text-[24px]'>Start earning rewards with easy </p>
            <p className='text-[24px]'>ordering & delivery</p>
            <img src={googleplay} alt="" className='w-[200px] pt-10  ' />
            </div>
        </div>
        <div className='absolute lg:top-[45rem] top-[70rem] left-[10%] w-[90%] '>
            <h1 className='text-[#3f691f] text-[40px] font-bold pb-5'>FEATURES</h1>
            <div className='bg-[#87a972] w-full h-fit lg:h-[105vh] text-white flex flex-col gap-[4rem] lg:gap-[4rem] py-[6%] lg:py-0  lg:pt-[5%] rounded-s-[10px] '>
                <div className='flex lg:flex-row flex-col justify-center gap-[4rem] lg:gap-[12rem]  items-center'>
                <div className=' flex flex-col w-[190px] gap-3 justify-center items-center text-center'>
                    <img src={people} alt="" className='w-[150px] h-[100px]' />
                    <p className='text-[20px] font-extrabold'>Skip the line</p>
                    <p className='text-[14px]'>Order ahead on the app, no need to wait in-store</p>
                </div>
                <div className=' flex flex-col w-[190px] gap-3 justify-center items-center text-center'>
                    <img src={discount} alt="" className='w-[140px] h-[100px]' />
                    <p className='text-[20px] font-extrabold'>Offers</p>
                    <p className='text-[14px]'>Daily discounts on your favorite drinks</p>
                </div>
                <div className=' flex flex-col w-[190px] gap-3 justify-center items-center text-center'>
                    <img src={notification} alt="" className='w-[130px] h-[100px]' />
                    <p className='text-[20px] font-extrabold'>Notifications</p>
                    <p className='text-[14px]'>Keeping you updated on your orders</p>
                </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-center gap-[4rem] lg:gap-[12rem]  items-center'>
                <div className=' flex flex-col w-[190px] gap-3 justify-center items-center text-center'>
                    <img src={badge} alt="" className='w-[170px] h-[130px] -mt-10' />
                    <p className='text-[20px] font-extrabold'>Double points</p>
                    <p className='text-[14px] w-[150px]'>When you order on the app</p>
                </div>
                <div className=' flex flex-col w-[190px] gap-3 justify-center items-center text-center'>
                    <img src={dollar} alt="" className='w-[130px] h-[100px]' />
                    <p className='text-[20px] font-extrabold'>Exclusive offers</p>
                    <p className='text-[14px] w-[150px]'>You’ll hear about exclusive deals before anyone else</p>
                </div>
                <div className=' flex flex-col w-[190px] gap-3 justify-center items-center text-center'>
                    <img src={payment} alt="" className='w-[100px] h-[100px]' />
                    <p className='text-[20px] font-extrabold'>Payment options</p>
                    <p className='text-[14px] w-[150px]'>Seamless payment options for you to choose from</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileApp
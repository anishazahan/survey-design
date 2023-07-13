"use client"

import Image from 'next/image'
import React from 'react'

import logo from '../../assets/logo.png'


const LeftHeading = () => {
  return (
    <>
     <div className="left w-full lg:w-[35%] h-[100vh] flex flex-col justify-center ">
               <Image className='w-[50%]' src={logo} alt="" /> 
               <h2 className='font-semibold mb-5'>Your satisfiction form</h2>
               <h2 className='font-bold text-3xl mb-5'>Please Take <span className='text-purple-950'>Survey</span> </h2>
               <p className='text-gray-500  mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis alias suscipit ipsum corrupti, eius ratione! Lorem ipsum dolor sit amet.</p>
               <button className='py-[12px] px-8 font-semibold bg-purple-800 text-fuchsia-200'>Get Started</button>
            </div>
    
    </>
  )
}

export default LeftHeading
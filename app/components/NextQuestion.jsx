"use client"

import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import 'aos/dist/aos.css';

const NextQuestion = () => {
  return (
    <>
      <div className="pl-[2%]">
      <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
          6. Please Give ratings!
        </h2>
        <div className="flex items-center space-x-2 pl-[5%]">
            <p className='text-xl border p-1 '><AiFillStar></AiFillStar></p>
            <p className='text-xl border p-1 '><AiFillStar></AiFillStar></p>
            <p className='text-xl border p-1 '><AiFillStar></AiFillStar></p>
            <p className='text-xl border p-1 '><AiFillStar></AiFillStar></p>
            <p className='text-xl border p-1 '><AiFillStar></AiFillStar></p>
        </div>

        <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
          7. Your Comment-
        
        </h2>
        <textarea data-aos="fade-up"
     data-aos-anchor-placement="top-center" className='max-w-5xl bg-gray-100 border-none outline-none p-5' name="" id="" cols="50" rows="6"></textarea>
        
       
      </div>

    </>
  )
}

export default NextQuestion
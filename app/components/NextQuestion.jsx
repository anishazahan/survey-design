"use client"

import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const NextQuestion = () => {
  return (
    <>
      <div className="">
      <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
          6. Please Give ratings!
        </h2>
        <div className="flex items-center space-x-2 pl-[5%]">
            <button className='text-xl border p-1 '><AiFillStar></AiFillStar></button>
            <button className='text-xl border p-1 '><AiFillStar></AiFillStar></button>
            <button className='text-xl border p-1 '><AiFillStar></AiFillStar></button>
            <button className='text-xl border p-1 '><AiFillStar></AiFillStar></button>
            <button className='text-xl border p-1 '><AiFillStar></AiFillStar></button>
        </div>

        <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
          7. Your Comment-
        
        </h2>
        <textarea className='w-full bg-gray-100 border-none outline-none p-5' name="" id="" cols="50" rows="6"></textarea>
        
        <div className="flex justify-end mt-8">
            <button className='px-8 py-3 bg-purple-900 font-semibold text-white'>Submit</button>
        </div>
      </div>

    </>
  )
}

export default NextQuestion
import React from 'react'
import SurveyQuestion from '../components/SurveyQuestion'
import LeftHeading from '../components/LeftHeading'

const page = () => {
  return (
    <div className='bg-purple-300 py-[5%]'>

        <div className="flex flex-col lg:flex-row px-5 xl:px-0  max-w-7xl mx-auto">
            <LeftHeading></LeftHeading>
            <div className="right w-full lg:w-[50%] pl-5 flex justify-center mx-auto">

                <SurveyQuestion></SurveyQuestion>
            </div>
        </div>

    </div>
  )
}

export default page
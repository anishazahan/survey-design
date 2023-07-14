"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SurveyQuestion from '../components/SurveyQuestion';
import LeftHeading from '../components/LeftHeading';
import surveyImg from '../../assets/survey.png';
import Image from 'next/image';
import '../components/style.css';
import { IoCall } from 'react-icons/io';
import { MdCall } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  const [showSurvey, setShowSurvey] = useState(false);
//   const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation will only occur once
      mirror: false, // Animation will not mirror when scrolling back up
    });
  }, []);

  const handleGetStarted = () => {
    setShowSurvey(true);
  };

  const handleBack = () => {
    setShowSurvey(false);
    // router.back();
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between">
          {/* ..........  left image............ */}
          <div className="left w-[40%] h-[100vh] flex justify-center items-center">
            <Image
              data-aos="fade-up"
              data-aos-duration="700"
              className="w-full"
              src={surveyImg}
              alt=""
            />
          </div>

          {/* ..........  right top section............ */}
          <div className="right-section w-[60%]">
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className=" flex items-center justify-end space-x-3 pr-[4%] pt-[4%]"
            >
                 
            <p className='text-white text-xl p-2 rounded bg-black'><MdCall></MdCall></p>
              <div className="">
                <h1 className="font-bold text-black">Need Help?</h1>
                <p className="text-sm">Call an Expert +93892384</p>
              </div>
            </div>

            {/* ..........  right section............ */}
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              className=""
            >
              {showSurvey ? (
                <SurveyQuestion />
              ) : (
                <>
                  <LeftHeading />
                  <div className="pl-[8%]">
                    <button className="bg-purple-800 py-2 px-8 hover:text-white font-semibold text-white" onClick={handleGetStarted}> <span>Get Started </span> </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        

        <div className="flex justify-end pr-5 mt-14 mb-14 items-center space-x-7">
          {/* {showSurvey && (
            <button className="bg-purple-800 py-3 px-10 font-semibold text-white" onClick={handleBack}>
              Prev
            </button>
          )} */}
        
        </div>
      </div>
    </>
  );
};

export default Main;

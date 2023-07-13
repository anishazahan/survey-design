"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const options_1 = [
  { id: 'option1', label: 'Strongly Agree' },
  { id: 'option2', label: 'Agree' },
  { id: 'option3', label: 'Disagree' },
  { id: 'option4', label: 'Strongly Disagree' }
];
const options_2 = [
  { id: 'option1', label: 'Strongly Agree' },
  { id: 'option2', label: 'Agree' },
  { id: 'option3', label: 'Disagree' },
  { id: 'option4', label: 'Strongly Disagree' }
];
const options_3 = [
  { id: 'option1', label: 'Strongly Agree' },
  { id: 'option2', label: 'Agree' },
  { id: 'option3', label: 'Disagree' },
  { id: 'option4', label: 'Strongly Disagree' }
];
const options_4 = [
  { id: 'option1', label: 'Yes,always' },
  { id: 'option2', label: 'Yes,most of the time' },
  { id: 'option3', label: 'Sometimes' },
  { id: 'option4', label: 'Rarely' },
  { id: 'option5', label: 'No,never' }
];
const options_5 = [
  { id: 'option1', label: 'Excellent' },
  { id: 'option2', label: 'Good' },
  { id: 'option3', label: 'Average' },
  { id: 'option4', label: 'Fair' },
  { id: 'option5', label: 'Poor' },
];

const SurveyQuestion = () => {

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (questionId, optionId) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: optionId
    }));
  };

  const uncheckOtherOptions = (options, selectedOptionId) => {
    options.forEach((option) => {
      if (option.id !== selectedOptionId) {
        const element = document.getElementById(option.id);
        if (element) {
          element.checked = false;
        }
      }
    });
  };

  const OptionList = ({ options, questionId, selectedOption, handleOptionChange }) => {
    return options.map((option) => (
      <div
        className={`${selectedOption === option.id && 'bg-purple-500'} flex items-center border-b border-gray-300 py-2 hover:bg-purple-400 pl-[5%]`}
        key={option.id}
      >
        <input
          type="radio"
          id={option.id}
          name={`surveyOption_${questionId}`}
          className="mr-2 border-2 border-purple-950 bg-white w-4 h-4 rounded-none accent-purple-800"
          onChange={() => handleOptionChange(questionId, option.id)}
          checked={selectedOption === option.id}
          required
        />
        <label className="cursor-pointer" htmlFor={option.id}>
          {option.label}
        </label>
      </div>
    ));
  };

  return (
    <div>
      <form>
        {/* Question 1 */}
        <h2 className="font-semibold text-zinc-800 mb-3">
          1. Overall I am satisfied with the services provided by Axons Homecare?
        </h2>
        <OptionList
          options={options_1}
          questionId="question1"
          selectedOption={selectedOptions['question1']}
          handleOptionChange={handleOptionChange}
        />

        {/* Question 2 */}
        <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
          2. I would recommend Axons Homecare to a family member and friend?
        </h2>
        <OptionList
          options={options_2}
          questionId="question2"
          selectedOption={selectedOptions['question2']}
          handleOptionChange={handleOptionChange}
        />

        {/* Question 3 */}
        <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
          3. Did the homecare staff effectively communicate with you about care plan, treatment, and any changes to your condition?
        </h2>
        <OptionList
          options={options_3}
          questionId="question3"
          selectedOption={selectedOptions['question3']}
          handleOptionChange={handleOptionChange}
        />

        {/* Question 4 */}
        <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
          4. What your privacy and confidentially respected by the Homecare staff?
        </h2>
        <OptionList
          options={options_4}
          questionId="question4"
          selectedOption={selectedOptions['question4']}
          handleOptionChange={handleOptionChange}
        />

        {/* Question 5 */}
        <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
          5. How would you rate the quality of the care provided by the Homecare staff?
        </h2>
        <OptionList
          options={options_5}
          questionId="question5"
          selectedOption={selectedOptions['question5']}
          handleOptionChange={handleOptionChange}
        />

        <div className="flex justify-end pr-2 mt-8">
          <Link href={'/survey/nextPage'} className='bg-purple-800 py-3 px-8 font-semibold text-white'>Next</Link>
        </div>
      </form>
    </div>
  );
};

export default SurveyQuestion;

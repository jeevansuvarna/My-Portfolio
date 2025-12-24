'use client';
import { useState } from 'react';
import Title from './Title';
import Company from './company';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Work() {
  const [workId, setworkId] = useState<number>(1);
  const handleButton = (index: number) => {
    setworkId(index);
  };
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id='work'
      className={`max-w-containerxs mx-auto py-10 lgl:py-24 px-4 transition-opacity duration-700 ${
        isVisible ? 'opacity-100 fade-in-up' : 'opacity-0'
      }`}
    >
      <Title title='Work' id='02'></Title>
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-38 flex flex-col'>
          <li
            onClick={(e) => handleButton(1)}
            className={`${
              workId == 1
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-textDark text-textDark'
            } border-l-2  bg-transperant hover:bg-bodyColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            GEHC
          </li>
          <br></br>
          <li
            onClick={(e) => handleButton(2)}
            className={`${
              workId == 2
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-textDark text-textDark'
            } border-l-2  bg-transperant hover:bg-bodyColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            CBT
          </li>
        </ul>
        <Company workId={workId} />
      </div>
    </section>
  );
}

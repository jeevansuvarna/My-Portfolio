'use client';
import { animate } from 'animejs';

import { useEffect } from 'react';

export default function Banner() {
  useEffect(() => {
    animate('.animated-span', {
      // Property keyframes
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 1000 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 },
      ],
      // Property specific parameters
      rotate: {
        from: '-1turn',
        delay: 0,
      },
      delay: (_, i) => i * 50, // Function based value
      ease: 'inOutCirc',
      loopDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <section
      id='home'
      className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
    >
      <h3 className='text-lg font-titleFont tracking-wide text-textGreen'>
        Hi, my name is
      </h3>
      {/* <h1 className='text-4xl lgl:text-6xl font-titleFont font-semibold'> */}
      <h2 className='flex items-center  text-xl gap-1 text-4xl lgl:text-6xl font-titleFont font-semibold'>
        <span className='animated-span'>J</span>
        <span className='animated-span'>e</span>
        <span className='animated-span'>e</span>
        <span className='animated-span'>v</span>
        <span className='animated-span'>a</span>
        <span className='animated-span'>n</span>
        <span className='animated-span'>&nbsp;</span>
        <span className='animated-span'>S</span>
        <span className='animated-span'>u</span>
        <span className='animated-span'>v</span>
        <span className='animated-span'>a</span>
        <span className='animated-span'>r</span>
        <span className='animated-span'>n</span>
        <span className='animated-span'>a</span>
      </h2>
      <span className='text-textDark mt-2 lgl:mt-4'>Full Stack Developer</span>
      {/* </h1> */}
      <p className='text-base md:max-w-[650px] text-textDark font-medium'>
        I am a software developer with 4 years of experiences, dedicated to
        translating innovative ideas into&nbsp;
        <span className='text-textGreen underline-transition text-textUnderline'>
          efficient
        </span>
        ,
        <span className='text-textGreen underline-transition text-textUnderline'>
          elegant
        </span>{' '}
        and&nbsp;
        <span className='text-textGreen underline-transition text-textUnderline'>
          scalable
        </span>{' '}
        digital solutions.
      </p>
      <a
        href='https://drive.google.com/file/d/1p6AWhScoVQ1PLL5625mK-NbTgeFfBfkR/view'
        target='_blank'
      >
        <button className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen teacking-wide hover:bg-hoverColor duration-300'>
          Resume
        </button>
      </a>
    </section>
  );
}

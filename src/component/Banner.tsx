'use client';
import { animate } from 'animejs';
import { useEffect } from 'react';
export default function Banner() {
  useEffect(() => {
    // Animate the entire banner container
    animate('.banner-container', {
      opacity: [0, 1],
      translateY: [40, 0],
      easing: 'easeOutExpo',
      duration: 1000,
    });

    // Animate each span letter
    animate('.animated-span', {
      translateY: [
        { value: '-2.75rem', duration: 1000, easing: 'easeOutExpo' },
        { value: 0, duration: 800, delay: 100, easing: 'easeOutBounce' },
      ],
      rotate: [{ value: -360, duration: 1000, delay: 0 }],
      delay: (_, i) => i * 50,
      easing: 'inOutCirc',
    });
  }, []);

  return (
    <section
      id='home'
      className='banner-container max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 opacity-0'
    >
      <h3 className='text-lg font-titleFont tracking-wide text-textGreen'>
        Hi, my name is
      </h3>
      <h2 className='flex items-center text-xl gap-1 text-4xl lgl:text-6xl font-titleFont font-semibold'>
        {'Jeevan Suvarna'.split('').map((char, i) => (
          <span key={i} className='animated-span'>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>

      <span className='text-textDark mt-2 lgl:mt-4'>Full Stack Developer</span>
      <p className='text-base md:max-w-[650px] text-textDark font-medium'>
        I am a software developer with 4+ years of experiences, dedicated to
        translating innovative ideas into&nbsp;
        <span className='text-textGreen underline-transition text-textUnderline'>
          efficient
        </span>
        ,&nbsp;
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
        href='https://drive.google.com/file/d/1ULlDXI-S_j3Ew7zrtkWQKccPBObsFHLu/view?usp=sharing'
        target='_blank'
      >
        <button className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>
          Resume
        </button>
      </a>
    </section>
  );
}

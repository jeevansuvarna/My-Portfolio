'use client';

import { VscGithubAlt } from 'react-icons/vsc';
import { LuLinkedin, LuInstagram } from 'react-icons/lu';
import { SiLeetcode } from 'react-icons/si';

export default function LeftSection() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-5 text-textLight'>
      <div className='flex flex-col gap-5'>
        <a
          href='https://github.com/jeevansuvarna'
          target='_blank'
          title='Github'
        >
          <span className='social-icon github w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer'>
            <VscGithubAlt />
          </span>
        </a>
        <a
          href='https://leetcode.com/u/jeevansuvarna71/'
          target='_blank'
          title='Leetcode'
        >
          <span className='social-icon leetcode w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer'>
            <SiLeetcode />
          </span>
        </a>
        <a
          href='https://www.linkedin.com/in/jeevan-suvarna-741b19186/'
          target='_blank'
          title='LinkedIn'
        >
          <span className='social-icon linkedin w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer'>
            <LuLinkedin />
          </span>
        </a>
        <a
          href='https://www.instagram.com/jeevaaannnn?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
          target='_blank'
          title='Instagram'
        >
          <span className='social-icon instagram w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer'>
            <LuInstagram />
          </span>
        </a>
        {/* <a href="">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <LuInstagram />
                    </span>
                </a> */}
      </div>
      <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  );
}

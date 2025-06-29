'use client';

import { VscGithubAlt } from 'react-icons/vsc';
import { LuLinkedin, LuInstagram } from 'react-icons/lu';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  return (
    <div className='hidden mdl:flex gap-5 xl:hidden items-center justify-center w-full py-6 '>
      <a href='https://github.com/jeevansuvarna' target='_blank' title='Github'>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <VscGithubAlt />
        </span>
      </a>
      <a
        href='https://leetcode.com/u/jeevansuvarna71/'
        target='_blank'
        title='Leetcode'
      >
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SiLeetcode />
        </span>
      </a>
      <a
        href='https://www.linkedin.com/in/jeevan-suvarna-741b19186/'
        target='_blank'
        title='LinkedIn'
      >
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <LuLinkedin />
        </span>
      </a>
      <a
        href='https://www.instagram.com/jeevaaannnn?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
        target='_blank'
        title='Instagram'
      >
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <LuInstagram />
        </span>
      </a>
    </div>
  );
}

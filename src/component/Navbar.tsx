'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { VscGithubAlt } from 'react-icons/vsc';
import { LuLinkedin, LuInstagram } from 'react-icons/lu';
import ToggleButton from './ToggleButton';
import { detectMobileWidth } from '../helper/utils.js';
import { SiLeetcode } from 'react-icons/si';
import Toast from './common/toatMessage';
import Image from 'next/image';
import logo from '../assets/images/logo2.png';
export default function Navbar() {
  const ref = useRef<string | any>();
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState<any>(false);

  useEffect(() => {
    setIsMobile(detectMobileWidth());
    const handleResize = () => setIsMobile(detectMobileWidth());
    window.addEventListener('resize', handleResize);

    // Cleanup to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: 'smooth',
    });
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('.active');
    });
    e.currentTarget.classList.add('active');
  };

  const navList = [
    {
      name: 'Home',
      link: '#home',
      highlight: false,
    },
    {
      name: 'Work',
      link: '#work',
      highlight: false,
    },
    {
      name: 'Project',
      link: '#project',
      highlight: false,
    },
    {
      name: 'Contact',
      link: '#contact',
      highlight: false,
    },
    {
      name: 'Resume',
      link: 'https://drive.google.com/file/d/1g8SJCWkpZ5uVGmrElD1ytoKQRDz554xU/view?usp=sharing',
      highlight: true,
    },
  ];
  const [showToast, setShowToast] = useState(true);

  // Show toast only once when component mounts
  useEffect(() => {
    // Auto-hide after 2 seconds
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-20 shadow-navbarShadow flex lg:h=[12vh] sticky top-0 z-60 bg-bodyColor px-8 sm:pr-0 z-300 navbar w-[90%] mx-auto mt-5 border border-[rgba(76,78,79,0.7)] rounded-full custom-bg'>
      <Link href='/' className='w-[50%] flex items-center'>
        <Image
          className='rounded-lg object-contain h-[40px]'
          src={logo}
          alt='profilImg'
          width={60}
          height={40}
        />
      </Link>
      <div className='flex max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between gap-3'>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex text-[13px] gap-7 align-items'>
            {navList.map((nav) => {
              return (
                <Link
                  href={nav.link}
                  onClick={(e) => handleScroll(e)}
                  className='flex item-center gap-1 font-medium text-navBarText hover:text-textGreen cursor-pointer duration-300 nav-link'
                >
                  <li>{nav.name}</li>
                </Link>
              );
            })}
          </ul>

          {!isMobile && (
            <div>
              <ToggleButton className={''} />
              <div className='absolute top-full mt-2 -translate-x-1/2'>
                <Toast
                  message='Now with theme switch!'
                  show={showToast}
                  onClose={() => setShowToast(false)}
                />
              </div>
            </div>
          )}

          <a
            href='https://drive.google.com/file/d/1ULlDXI-S_j3Ew7zrtkWQKccPBObsFHLu/view?usp=sharing?usp=sharing'
            target='_blank'
          >
            <button className='border border-textGreen rounded-md text-textGreen text-[13px] px-6 py-3 hover:bg-hoverColor duration-200'>
              Resume
            </button>
          </a>
        </div>
        {isMobile && <ToggleButton className={'mobile'} />}
        <div
          onClick={() => setShowMenu(true)}
          className='w-6  h-5 flex flex-col justify-between items-center mdl:hidden text-4x1 text-textGReen cursor-pointer overflow cursor-pointer overflow-hidden group'
        >
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-2 group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className='fixed mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex fkex-col items-end'
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='w-[100%] overflow-y-scroll scrollbarHide bg-bodyColor flex flex-col items-center px-4 py-10 relative bg-[var(--body-color)] rounded-t-[32px] border border-[#4b4b4b] h-[60%]'
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'
              />
              <div className='flex flex-col items-center gap-7'>
                <ul className='flex flex-col text-base gap-7 '>
                  {navList.map((nav) => {
                    return (
                      <Link
                        className={`flex flex-col text-base gap-7 justify-center items-center rounded-full p-[12px] w-[150px] translate-x-[-10px] translate-z-0 ${
                          nav.highlight ? 'border border-textGreen' : ''
                        }`}
                        href={nav.link}
                        onClick={(e) => handleScroll(e)}
                      >
                        <motion.li
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.1,
                            ease: 'easeIn',
                          }}
                        >
                          {nav.name}
                        </motion.li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <div className='flex gap-6 mt-8'>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: 'easeIn' }}
                  href='https://github.com/jeevansuvarna'
                  target='_blank'
                >
                  <span
                    className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline flex
                                        items-center justify-center hover;text-textGreen cursor-pointer hover:-translate-y-2 transitionall duration-300'
                  >
                    <VscGithubAlt />
                  </span>
                </motion.a>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: 'easeIn' }}
                  href='https://leetcode.com/u/jeevansuvarna71/'
                  target='_blank'
                >
                  <span
                    className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline flex
                                        items-center justify-center hover;text-textGreen cursor-pointer hover:-translate-y-2 transitionall duration-300'
                  >
                    <SiLeetcode />
                  </span>
                </motion.a>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: 'easeIn' }}
                  href='https://www.instagram.com/jeevaaannnn?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
                  target='_blank'
                >
                  <span
                    className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline flex
                                        items-center justify-center hover;text-textGreen cursor-pointer hover:-translate-y-2 transitionall duration-300'
                  >
                    <LuInstagram />
                  </span>
                </motion.a>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: 'easeIn' }}
                  href='https://www.linkedin.com/in/jeevan-suvarna-741b19186/'
                  target='_blank'
                >
                  <span
                    className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline flex
                                        items-center justify-center hover;text-textGreen cursor-pointer hover:-translate-y-2 transitionall duration-300'
                  >
                    <LuLinkedin />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

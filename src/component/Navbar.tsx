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
            onClick={(e) => e.target === e.currentTarget && setShowMenu(false)}
            className='fixed mdl:hidden inset-0 w-full h-full bg-black/60 backdrop-blur-sm flex flex-col justify-end z-[1000]'
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className='mobile-menu-sheet w-full bg-[var(--body-color)] rounded-t-[28px] border-t border-x border-[var(--text-green)]/30 shadow-2xl'
            >
              {/* Drag handle */}
              <div className='flex justify-center pt-3 pb-2'>
                <div className='w-10 h-1 bg-textDark/40 rounded-full'></div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowMenu(false)}
                className='absolute top-4 right-4 w-8 h-8 rounded-full bg-textGreen/10 flex items-center justify-center text-textGreen hover:bg-textGreen/20 transition-colors'
              >
                <MdOutlineClose className='text-xl' />
              </button>

              {/* Navigation Links */}
              <div className='flex flex-col items-center gap-2 px-6 pt-4 pb-6'>
                <ul className='flex flex-col text-base gap-1 w-full'>
                  {navList.map((nav, index) => (
                    <motion.div
                      key={nav.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        className={`flex items-center justify-center py-4 px-6 rounded-2xl text-center font-medium transition-all duration-200 ${
                          nav.highlight
                            ? 'bg-textGreen/10 border border-textGreen text-textGreen'
                            : 'hover:bg-textGreen/5 text-textLight'
                        }`}
                        href={nav.link}
                        onClick={(e) => handleScroll(e)}
                      >
                        <li className='list-none'>{nav.name}</li>
                      </Link>
                    </motion.div>
                  ))}
                </ul>

                {/* Divider */}
                <div className='w-16 h-[1px] bg-textDark/20 my-4'></div>

                {/* Social Icons */}
                <div className='flex gap-4'>
                  {[
                    { href: 'https://github.com/jeevansuvarna', icon: <VscGithubAlt />, label: 'github' },
                    { href: 'https://leetcode.com/u/jeevansuvarna71/', icon: <SiLeetcode />, label: 'leetcode' },
                    { href: 'https://www.instagram.com/jeevaaannnn?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr', icon: <LuInstagram />, label: 'instagram' },
                    { href: 'https://www.linkedin.com/in/jeevan-suvarna-741b19186/', icon: <LuLinkedin />, label: 'linkedin' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      href={social.href}
                      target='_blank'
                    >
                      <span className={`social-icon ${social.label} w-11 h-11 text-xl rounded-full inline-flex items-center justify-center cursor-pointer`}>
                        {social.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

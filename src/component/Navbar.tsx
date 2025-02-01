'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { VscGithubAlt } from 'react-icons/vsc';
import { LuLinkedin, LuInstagram } from 'react-icons/lu';
export default function Navbar() {
  const ref = useRef<string | any>();
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
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

  return (
    <div className="w-full h-20 shadow-navbarShadow lg:h=[12vh] sticky top-0 z-60 bg-bodyColor px-4 z-300 navbar">
      <div className="flex max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Image className="w-14" src={logo} alt="logo"></Image> */}
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7 align-items">
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>Home</li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>01.</span>
              <li> About</li>
            </Link>
            <Link
              href="#work"
              onClick={handleScroll}
              className="flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>02.</span>
              <li> Experience</li>
            </Link>
            <Link
              href="#project"
              onClick={handleScroll}
              className="flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>03.</span>
              <li> Work</li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className="flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>04.</span>
              <li> Contact</li>
            </Link>
          </ul>
          <a
            href="https://drive.google.com/file/d/1p6AWhScoVQ1PLL5625mK-NbTgeFfBfkR/view?usp=sharing"
            target="_blank"
          >
            <button className="border border-textGreen rounded-md text-textGreen text-[13px] px-6 py-3 hover:bg-hoverColor duration-200">
              Resume
            </button>
          </a>
        </div>
        <div
          onClick={() => setShowMenu(true)}
          className="w-6  h-5 flex flex-col justify-between items-center mdl:hidden text-4x1 text-textGReen cursor-pointer overflow cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-2 group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex fkex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7 ">
                  <Link
                    className="flex flex-col text-base gap-7"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: -10, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: 'easeIn',
                      }}
                    >
                      <span>01.</span>Home
                    </motion.li>
                  </Link>
                  <Link
                    className="flex flex-col text-base gap-7"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: -10, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: 'easeIn',
                      }}
                    >
                      <span>02.</span>About
                    </motion.li>
                  </Link>
                  <Link
                    className="flex flex-col text-base gap-7"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: -10, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: 'easeIn',
                      }}
                    >
                      <span>03.</span>Work
                    </motion.li>
                  </Link>
                  <Link
                    className="flex flex-col text-base gap-7"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: -10, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: 'easeIn',
                      }}
                    >
                      <span>04.</span>Project
                    </motion.li>
                  </Link>
                  <Link
                    className="flex flex-col text-base gap-7"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: -10, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: 'easeIn',
                      }}
                    >
                      <span>05.</span>Contact
                    </motion.li>
                  </Link>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1D9tRrhXzRZlFjCwb7s1gURFc-crFV60X/view?usp=sharing"
                  target="_blank"
                >
                  <motion.button
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeIn',
                    }}
                  >
                    {' '}
                    Resume
                  </motion.button>
                </a>
              </div>
              <div className="flex gap-6 mt-8">
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: 'easeIn' }}
                  href="https://github.com/jeevansuvarna"
                  target="_blank"
                >
                  <span
                    className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline flex
                                        items-center justify-center hover;text-textGreen cursor-pointer hover:-translate-y-2 transitionall duration-300"
                  >
                    <VscGithubAlt />
                  </span>
                </motion.a>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: 'easeIn' }}
                  href="https://www.instagram.com/jeevaaannnn?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <span
                    className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline flex
                                        items-center justify-center hover;text-textGreen cursor-pointer hover:-translate-y-2 transitionall duration-300"
                  >
                    <LuInstagram />
                  </span>
                </motion.a>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: 'easeIn' }}
                  href="https://www.linkedin.com/in/jeevan-suvarna-741b19186/"
                  target="_blank"
                >
                  <span
                    className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline flex
                                        items-center justify-center hover;text-textGreen cursor-pointer hover:-translate-y-2 transitionall duration-300"
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

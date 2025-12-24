'use client';
import Image from 'next/image';
import Title from './Title';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiLess,
  SiTailwindcss,
  SiJest,
} from 'react-icons/si';
import { FaSitemap, FaCodeBranch } from 'react-icons/fa';
import { TbNetwork } from 'react-icons/tb';
import { profile } from '@/assets';
import useScrollReveal from '@/hooks/useScrollReveal';

const techIcons = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  'React.js': <SiReact />,
  'Next.js': <SiNextdotjs />,
  'Vue.js': <SiVuedotjs />,
  'Node.js': <SiNodedotjs />,
  Fastify: <SiJavascript />, // fallback
  'HTML / CSS / LESS': (
    <div className='flex gap-1'>
      <SiHtml5 /> <SiCss3 /> <SiLess />
    </div>
  ),
  'Tailwind CSS': <SiTailwindcss />,
  Jest: <SiJest />,
  'System Design': <FaSitemap />,
  DSA: <FaCodeBranch />,
  Microservice: <TbNetwork />,
};

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id='about'
      ref={ref}
      className={`max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 transition-opacity duration-700 ${
        isVisible ? 'opacity-100 fade-in-up' : 'opacity-0'
      }`}
    >
      <Title title='About Me' id='01' />
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base texxt-textDark font-medium flex flex-col gap-4'>
          <p>
            Hello, my name is{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Jeevan Suvarna
            </span>
            . I am a{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Full-Stack Developer{' '}
            </span>
            with over 4 years of experience designing and delivering robust,
            scalable digital solutions across diverse industry verticals. 
            <br></br>
            <br></br>
            Previously, I contributed to a fast-growing startup as a Frontend
            Developer, where I architected high-performance, SEO-optimized, and
            responsive user interfaces for e-commerce platforms and dynamic web
            applications. My work focused on delivering seamless user
            experiences while maintaining code quality and scalability.{' '}
            <br></br>
            <br></br>
            Currently, I serve as a Full-Stack Developer at <span className='text-textGreen underline-transition text-textUnderline'>GE HealthCare</span>, where
            I develop and maintain customer analytics and reporting systems. In
            this role, I consistently drive improvements in application
            performance, accessibility standards, and overall user experience,
            ensuring that solutions meet both business requirements and end-user
            needs
            <br />
            <br />
          </p>

          <div>
            Here are a few technologies I've been working with:
            <ul className='flex flex-wrap gap-3 mt-6 text-lg font-titleFont max-w-[450px]'>
              {Object.entries(techIcons).map(([tech, icon]) => (
                <li
                  key={tech}
                  className='flex items-center gap-2 justify-center px-4 h-10 shrink-0 rounded-[32px] border border-textGreen text-textLight text-sm font-medium leading-normal hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'
                >
                  {icon}
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group max-lg:hidden'>
          <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
            <div className='w-full h-full relative z-20 flex pl-6  lgl:pl-0 '>
              <Image
                className='rounded-lg h-full object-cover'
                src={profile}
                alt='profilImg'
                width={500}
              ></Image>
              <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
            <div className='hidden lgl:inline-flex top-0 w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-300 absolute'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

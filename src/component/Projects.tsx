'use client';

import Image from 'next/image';
import Title from './Title';
import { project1, project2, project3, project4 } from '@/assets';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description:
        'My personal website, inspired by Brittany Chiang. It displays my experiences, skills, and projects.',
      tech: ['Nextjs', 'TailWind CSS', 'Netify'],
      image: project2,
      reverse: true,
      github: 'https://github.com/jeevansuvarna/portfolio',
      live: 'https://jeevan-suvarna.netlify.app/',
    },
    {
      id: 2,
      title: 'Spotilytics',
      description:
        '🎧 Built Spotilytics, a React-based web app that connects with your Spotify account to reveal personalized music analytics. 📊 It showcases top tracks, favorite artists, playlists, and visual charts based on your listening habits. 🚀 Designed with a sleek and responsive UI to make exploring your music journey both fun and insightful.',
      tech: ['React', 'Spotify API', 'Netify', 'CSS'],
      image: project4,
      reverse: false,
      github: 'https://github.com/jeevansuvarna/Spotilytics',
      live: 'https://spotilytics.netlify.app/',
    },
    {
      id: 3,
      title: 'One For All Sort 💥⚡',
      description:
        'An application that visually illustrates well-known sorting algorithms such as merge sort, quick sort, and so on in action using bar graphs.',
      tech: ['React js'],
      image: project1,
      reverse: true,
      github: 'https://github.com/jeevansuvarna/SortingVisualizer',
      live: 'https://sort-algoviz.netlify.app/',
    },
    {
      id: 4,
      title: 'Raijin - CLI Shortcut Manager ⚡🥷',
      description:
        'Raijin is a command-line tool that allows users to create and execute shortcuts for frequently used commands. It simplifies workflow automation by storing shortcuts in a JSON config file.',
      tech: ['Go'],
      image: project3,
      reverse: false,
      github: 'https://github.com/jeevansuvarna/Raijin-CLI-Shortcut',
      live: 'https://drive.google.com/file/d/1uACUbO3cDhAtnaCvvDOr0-4B9h4DrFt3/view?usp=sharing',
    },
  ];

  return (
    <section
      id='project'
      ref={ref}
      className={`max-w-container mx-auto lgl:px-20 py-24 transition-opacity duration-700 ${
        isVisible ? 'opacity-100 fade-in-up' : 'opacity-0'
      }`}
    >
      {' '}
      <Title title='Some Things I have Built' id='03' />
      {
        <div className='w-full flex gap-28 flex-col items-center justify-between'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className='w-full flex flex-col items-center justify-center gap-28 mt-10'
            >
              <div
                className={`flex flex-col ${
                  project.reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
                } gap-6`}
              >
                {/* Image */}
                <a
                  href={project.live}
                  target='_blank'
                  rel='noreferrer'
                  className='w-full xl:w-1/2 h-auto group'
                >
                  <div className='relative'>
                    <Image
                      className='w-full h-full object-contain border border-[var(--text-underline)] rounded-md max-h-[332px]'
                      src={project.image}
                      alt={project.title}
                    />
                    <div className='hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                  </div>
                </a>

                {/* Content */}
                <div
                  className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right `}
                >
                  <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                  </p>
                  <h3 className='text-2xl font-bold'>{project.title}</h3>
                  <p
                    className={`bg-bodyColor relative z-20 text-sm md:text-base p-2 md:p-6 rounded-md shadow-shadowColor ${
                      project.reverse ? 'xl:-mr-16' : 'xl:-ml-16'
                    }`}
                  >
                    {project.description}
                  </p>
                  <ul className='flex gap-2 text-xs md:text-sm font-titleFont tracking-wide md:gap-5 justify-between text-textDark'>
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <div className='flex gap-6 text-2xl'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noreferrer'
                      className='hover:text-textGreen duration-300'
                    >
                      <TbBrandGithub />
                    </a>
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noreferrer'
                      className='hover:text-textGreen duration-300'
                    >
                      <RxOpenInNewWindow />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </section>
  );
}

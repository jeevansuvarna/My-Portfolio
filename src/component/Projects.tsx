'use client';

import Image from 'next/image';
import Title from './Title';
import { project1, project2, project3, project4 } from '@/assets';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';
import useScrollReveal from '@/hooks/useScrollReveal';
import { useEffect, useState } from 'react';
import { fetchRemoteConfig } from '../helper/firebase';

// Skeleton Loader Component
function ImageSkeleton() {
  return (
    <div className='w-full h-[322px] rounded-md overflow-hidden relative bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'>
      <div className='absolute inset-0 skeleton-shimmer'></div>
      {/* Placeholder content */}
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-3'>
        <div className='w-16 h-16 rounded-full bg-textDark/20 flex items-center justify-center'>
          <svg className='w-8 h-8 text-textDark/40 animate-pulse' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
          </svg>
        </div>
        <span className='text-textDark/40 text-sm'>Loading project...</span>
      </div>
    </div>
  );
}

// Project Image with loading state
function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className='relative w-full h-auto min-h-[200px]'>
      {isLoading && <ImageSkeleton />}
      <Image
        className={`w-full h-full object-contain border border-[var(--text-underline)] rounded-md max-h-[332px] transition-opacity duration-500 ${
          isLoading ? 'opacity-0 absolute inset-0' : 'opacity-100'
        }`}
        src={src}
        alt={alt}
        width={619}
        height={322}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
      {hasError && (
        <div className='w-full h-[322px] rounded-md border border-textDark/20 flex items-center justify-center bg-bodyColor'>
          <span className='text-textDark'>Failed to load image</span>
        </div>
      )}
    </div>
  );
}

const quirkyTexts = [
  "Curious for more? Here you go...",
  "Wait, there's more magic!",
  "The adventure continues...",
  "Plot twist: More projects!",
  "You asked for it...",
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [projects, setProjects] = useState<any>([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [quirkyIndex, setQuirkyIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetchRemoteConfig();
      console.log(res, 'res');
      setProjects(res);
    };

    fetchProjects();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
    setQuirkyIndex((prev) => (prev + 1) % quirkyTexts.length);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

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
          {visibleProjects.map((project: any, index: any) => (
            <div
              key={project.id}
              className='w-full flex flex-col items-center justify-center gap-28 mt-10'
            >
              <div
                className={`flex flex-col ${
                  project?.reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
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
                    <ProjectImage src={project.image} alt={project.title} />
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
                    {project.tech.map((tech: any, i: any) => (
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

          {/* Load More Button */}
          {hasMore && (
            <div className='flex flex-col items-center gap-3 mt-8'>
              <button
                onClick={handleLoadMore}
                className='group relative px-8 py-4 rounded-lg border border-textGreen text-textGreen font-medium overflow-hidden transition-all duration-300 hover:text-bodyColor'
              >
                <span className='relative z-10 flex items-center gap-2'>
                  <span>Show More</span>
                  <span className='text-lg group-hover:translate-y-1 transition-transform duration-300'>↓</span>
                </span>
                <div className='absolute inset-0 bg-textGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
              </button>
              <p className='text-textDark text-sm italic animate-pulse'>
                {quirkyTexts[quirkyIndex]}
              </p>
            </div>
          )}

          {/* All loaded message */}
          {!hasMore && projects.length > 2 && (
            <p className='text-textDark text-sm italic mt-8'>
              That&apos;s all folks! You&apos;ve seen my entire arsenal.
            </p>
          )}
        </div>
      }
    </section>
  );
}

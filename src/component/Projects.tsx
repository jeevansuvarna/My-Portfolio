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

const PROJECT_IMAGE_HEIGHT = 322;

// Project Image with loading state
function ProjectImage({
  src,
  alt,
  fixedHeight = false,
}: {
  src: string;
  alt: string;
  fixedHeight?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full ${fixedHeight ? 'h-[322px]' : 'h-auto min-h-[200px]'}`}
    >
      {isLoading && <ImageSkeleton />}
      <Image
        className={`w-full object-contain border border-[var(--text-underline)] rounded-md transition-opacity duration-500 ${
          fixedHeight ? 'h-[322px]' : 'h-full max-h-[332px]'
        } ${isLoading ? 'opacity-0 absolute inset-0' : 'opacity-100'}`}
        src={src}
        alt={alt}
        width={619}
        height={PROJECT_IMAGE_HEIGHT}
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

function ProjectImageGallery({
  images,
  alt,
  liveUrl,
}: {
  images: string[];
  alt: string;
  liveUrl?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;
  const hasLiveUrl = Boolean(liveUrl);

  useEffect(() => {
    if (!hasMultiple) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasMultiple, images.length]);

  const goTo = (index: number) => setCurrentIndex(index);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  if (images.length === 0) return null;

  const imageContent = hasMultiple ? (
    <div className='relative w-full h-[322px] overflow-hidden'>
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <ProjectImage
            src={src}
            alt={`${alt} - ${index + 1}`}
            fixedHeight
          />
        </div>
      ))}
      <div className='hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
    </div>
  ) : (
    <div className='relative h-[322px]'>
      <ProjectImage src={images[0]} alt={alt} fixedHeight />
      <div className='hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
    </div>
  );

  return (
    <div className='flex flex-col'>
      <div className='relative'>
        {hasLiveUrl ? (
          <a href={liveUrl} target='_blank' rel='noreferrer' className='block'>
            {imageContent}
          </a>
        ) : (
          imageContent
        )}

        {hasMultiple && (
          <>
            <button
              type='button'
              aria-label='Previous image'
              onClick={goPrev}
              className='absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-bodyColor/80 border border-textGreen/30 text-textGreen flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-textGreen hover:text-bodyColor transition-all duration-300'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
            </button>
            <button
              type='button'
              aria-label='Next image'
              onClick={goNext}
              className='absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-bodyColor/80 border border-textGreen/30 text-textGreen flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-textGreen hover:text-bodyColor transition-all duration-300'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className='flex justify-center gap-2 mt-3'>
          {images.map((_, index) => (
            <button
              key={index}
              type='button'
              aria-label={`Go to image ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-5 bg-textGreen'
                  : 'w-2 bg-textDark/40 hover:bg-textDark/70'
              }`}
            />
          ))}
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
                <div className='w-full xl:w-1/2 h-auto group'>
                  <ProjectImageGallery
                    images={project.images ?? []}
                    alt={project.title}
                    liveUrl={project.live}
                  />
                </div>

                {/* Content */}
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-left'>
                  <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                  </p>
                  <h3 className='text-2xl font-bold'>{project.title}</h3>
                  <p
                    className={`bg-bodyColor relative z-20 text-sm md:text-base p-2 md:p-6 rounded-md shadow-shadowColor text-left ${
                      project.reverse ? 'xl:-mr-16' : 'xl:-ml-16'
                    }`}
                  >
                    {project.description}
                  </p>
                  <ul className='flex gap-2 text-xs md:text-sm font-titleFont tracking-wide md:gap-5 justify-start text-textDark'>
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
                    {project.live && (
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noreferrer'
                        className='hover:text-textGreen duration-300'
                      >
                        <RxOpenInNewWindow />
                      </a>
                    )}
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

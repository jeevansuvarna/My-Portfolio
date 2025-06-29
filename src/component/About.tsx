'use client';
import Image from 'next/image';
import Title from './Title';
import { BiCodeAlt } from 'react-icons/bi';
import { profile } from '@/assets';
export default function About() {
  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
      <Title title='About Me' id='01' />
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base texxt-textDark font-medium flex flex-col gap-4'>
          <p>
            Hello, my name is{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Jeevan Suvarna
            </span>
            . I'm a dedicated <strong>Full-Stack Developer</strong> with over{' '}
            <strong>3.5 years of experience</strong> crafting robust and
            scalable digital solutions. My journey in web development began in
            college back in 2016, when I started exploring{' '}
            <strong>Node.js</strong> along with front-end technologies. Since
            then, I’ve deepened my expertise in modern stacks like{' '}
            <strong>JavaScript</strong>, <strong>TypeScript</strong>,{' '}
            <strong>Vue.js</strong>, <strong>React</strong>,{' '}
            <strong>Next.js</strong>, and <strong>Fastify</strong>.
            <br />
            <br />
            Currently, I’m part of a fast-growing startup, where I specialize in{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              frontend development
            </span>
            —building <strong>high-performance</strong>,{' '}
            <strong>SEO-friendly</strong>, and{' '}
            <strong>responsive user interfaces</strong>. I’ve worked extensively
            on <strong>e-commerce platforms</strong> and dynamic web
            applications, consistently enhancing{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              performance
            </span>
            ,{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              accessibility
            </span>
            , and{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              user experience{' '}
            </span>
            across projects.
            <br />
            <br />I thrive in environments that embrace modern frontend
            architecture and love solving complex problems with clean,
            maintainable code. Whether it’s improving a Lighthouse score,
            architecting a scalable component system, or shipping features ahead
            of schedule, I aim to create meaningful impact through technology.
            🚀
          </p>

          <div>
            Here are a few technologies I've been working with:
            <ul className='grid grid-cols-2 gap-2 mt-6 text-lg font-titleFont max-w-[450px]'>
              {[
                'JavaScript',
                'TypeScript',
                'React.js',
                'Next.js',
                'Vue.js',
                'Node.js',
                'Fastify',
                'HTML / CSS / LESS',
                'Tailwind CSS',
                'Jest',
                'System Design',
              ].map((tech) => (
                <li key={tech} className='flex items-center gap-3'>
                  <span className='text-textGreen'>
                    <BiCodeAlt />
                  </span>
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

'use client';
import Image from 'next/image';
import Title from './Title';
import { AiFillThunderbolt } from 'react-icons/ai';
import { profile } from '@/assets';
export default function About() {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <Title title="About Me" id="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base texxt-textDark font-medium flex flex-col gap-4">
          <p>
            {' '}
            Hello !, My name is{' '}
            <span className="text-textGreen underline-transition text-textUnderline">
              Jeevan Suvarna
            </span>{' '}
            ,a passionate Full-Stack Developer with 3.5+ years of experience in
            building digital solutions. My journey into web development began
            during my college days in 2016, when I started working on Node.js
            projects alongside front-end technologies. Over the years, I have
            honed my skills in JavaScript, TypeScript, Vue.js, React, Next.js,
            and Fastify, allowing me to create high-performance, scalable
            applications. <br /> <br />
            Currently, I work at a fast-growing startup, where I specialize in{' '}
            <span className="text-textGreen underline-transition text-textUnderline">
              frontend development
            </span>
            , crafting optimized, user-friendly, and responsive interfaces. I
            have worked extensively on e-commerce platforms and web
            applications, improving{' '}
            <span className="text-textGreen underline-transition text-textUnderline">
              web performance
            </span>
            ,{' '}
            <span className="text-textGreen underline-transition text-textUnderline">
              SEO
            </span>
            , and{' '}
            <span className="text-textGreen underline-transition text-textUnderline">
              user experience.
            </span>
            I'm always excited to explore cutting-edge frontend technologies and
            develop solutions that make an impact. 🚀
          </p>
          <div>
            Here are a few technologies I've been working with:
            <ul className="max-w-[450px] text-lg font-titleFont grid grid-cols-2 gap-2 mt-6">
              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Javascript
              </li>
              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Typescript
              </li>
              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                React JS
              </li>
              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Node.js
              </li>
              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Vue.js
              </li>
              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                HTML/CSS/LESS
              </li>
              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Next.js
              </li>
              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Fastify
              </li>

              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Tailwaind
              </li>
              <li className="flex items-center gap-3">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Jest
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group max-lg:hidden">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6  lgl:pl-0 ">
              <Image
                className="rounded-lg h-full object-cover"
                src={profile}
                alt="profilImg"
                width={500}
              ></Image>
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden lgl:inline-flex top-0 w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-300 absolute"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

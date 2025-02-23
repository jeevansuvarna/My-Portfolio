"use client";

import Image from "next/image";
import Title from "./Title";
import { project1, project2, project3 } from "@/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Projects() {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <Title title="Some Things I have Built" id="03" />
      <div className="w-full flex gap-28 flex-col items-center justify-between">
        {/* First Project use loop */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              href="/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto  group"
            >
              <div className="relative">
                <Image
                  className="w-full h-full object-contain border border-[var(--text-underline)] rounded-md"
                  src={project2}
                  alt="project"
                />
                <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Portfolio Website</h3>
              <p className=" bg-bodyColor relative z-20 text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md shadow-shadowColor">
                My personal website , inspired from brittany chiang. Which
                displays my experiences , skills and projects.
              </p>
              <ul className="flex gap-2 text-xs md:text-sm font-titleFont tracking-wide md:gap-5 justify-between text-textDark left-0">
                <li>Nextjs</li>
                <li>TailWind CSS</li>
              </ul>
              <div className="flex gap-6 text-2xl">
                <a
                  href="/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Second Project use loop */}

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href="https://sort-algoviz.netlify.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto group"
            >
              <div className="relative">
                <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                <Image
                  className="w-full h-full object-contain border border-[var(--text-underline)] rounded-md"
                  src={project1}
                  alt="project"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">One For All Sort 💥⚡</h3>
              <p className=" bg-bodyColor relative z-20 text-sm md:text-base p-2 md:p-6 rounded-md shadow-shadowColor">
                An application that visually illustrate well-know{" "}
                <span className="text-textGreen underline-transition text-textUnderline">
                  sorting algorithm
                </span>{" "}
                such as merge sort , quick sort and so on in action using bar
                graphs.
              </p>
              <ul className="flex gap-2 text-xs md:text-sm font-titleFont tracking-wide md:gap-5 justify-between text-textDark">
                <li>React js</li>
              </ul>
              <div className="flex gap-6 text-2xl ">
                <a
                  href="https://github.com/jeevansuvarna/SortingVisualizer"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://sort-algoviz.netlify.app/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Third Project use loop */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              href="/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto  group"
            >
              <div className="relative">
                <Image
                  className="w-full h-full object-contain max-h-[332px] border border-[var(--text-underline)] rounded-md"
                  src={project3}
                  alt="project"
                />
                <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Raijin - CLI Shortcut Manager
              </h3>
              <p className=" bg-bodyColor relative z-20 text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md shadow-shadowColor">
                ⚡🥷{" "}
                <span className="text-textGreen underline-transition text-textUnderline">
                  Raijin{" "}
                </span>
                is a command-line tool that allows users to create and execute
                shortcuts for frequently used commands. It simplifies workflow
                automation by storing shortcuts in a JSON configuration file
                located on the Desktop for easy access and modification.
              </p>
              <ul className="flex gap-2 text-xs md:text-sm font-titleFont tracking-wide md:gap-5 justify-between text-textDark left-0">
                <li>Go</li>
              </ul>
              <div className="flex gap-6 text-2xl ">
                <a
                  href="https://github.com/jeevansuvarna/Raijin-CLI-Shortcut"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://drive.google.com/file/d/1uACUbO3cDhAtnaCvvDOr0-4B9h4DrFt3/view?usp=sharing"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

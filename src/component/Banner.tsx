'use client'
export default function Banner() {
    return (
        <section id="home"
            className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
            <h3 className="text-lg font-titleFont tracking-wide text-textGreen">
                Hi, my name is
            </h3>
            <h1 className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"> Jeevan Suvarna
                <span className="text-textDark mt-2 lgl:mt-4">Software Developer.</span>
            </h1>
            <p className="text-base md:max-w-[650px] text-textDark font-medium">
                I am a software developer with 2.5+ years of experiences, dedicated to translating innovative ideas into&nbsp;
                <span className="text-textGreen underline-transition">efficient</span>,
                <span className="text-textGreen underline-transition">elegant</span> and&nbsp;
                <span className="text-textGreen underline-transition">scalable</span> digital solutions.
            </p>
            <a href="https://drive.google.com/file/d/1D9tRrhXzRZlFjCwb7s1gURFc-crFV60X/view?usp=sharing" target="_blank">
                <button className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen teacking-wide hover:bg-hoverColor duration-300" >
                    Skill Snapshot - Resume
                </button>
            </a>
        </section>
    )
} 
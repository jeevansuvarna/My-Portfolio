'use client';
import { TiArrowForward } from 'react-icons/ti';

export default function Company({ workId }: { workId: number }) {
  switch (workId) {
    case 2:
      return <Cloverbay />;
    case 1:
      return <GEHC />;
    default:
      return <Cloverbay />;
  }
}

const Cloverbay = () => {
  return (
    <div>
      <h3>
        <span className='text-textGreen tracking-wide underline-transition text-textUnderline'>
          Clover Bay Technologies Pvt Ltd
        </span>
      </h3>
      <p className='text-xm mt-1 font-medium text-textDark'>
        <i>Software Development Engineer II</i>
      </p>
      <p className='text-sm mt-1 font-medium text-textDark'>
        July 2021 - December 2025
      </p>
      <ul className='mt-6 flex flex-col gap-4'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Led the successful migration of a large-scale e-commerce Website -{' '}
            <a
              href='https://www.tirabeauty.com/'
              target='_blank'
              className='text-textGreen underline-transition text-textUnderline'
            >
              TiraBeauty
            </a>{' '}
            from{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Vue.js to React
            </span>
            , significantly improving performance, scalability, and SEO.
            Achieved up to
            <strong className='text-textGreen'> 80% enhancement</strong> in web
            performance and user experience.
          </div>
        </li>

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Designed and implemented a robust{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Backend-for-Frontend (BFF)
            </span>{' '}
            layer using{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Node.js
            </span>{' '}
            and{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Fastify
            </span>
            , efficiently handling user data across 21 countries and drastically
            improving server response time and maintainability.
          </div>
        </li>

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Built an engaging feature for a beauty e-commerce platform—a{' '}
            <strong>reward points system</strong> linked to purchases, enabling
            users to redeem points for vouchers and products. Developed in{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Vue.js
            </span>
            , it improved user retention and interaction. Also revamped the
            3-step checkout into a streamlined single-page flow, and delivered 3
            major features in a short timeline through close collaboration with
            backend developers and agile teams.
          </div>
        </li>

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Led a team of 4 in creating a customizable web theme using{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Vue.js
            </span>
            , enhancing both aesthetics and user control via a dedicated
            platform application.
          </div>
        </li>

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Developed a performant admin dashboard using{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              React
            </span>{' '}
            and{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              GraphQL
            </span>
            , with a strong focus on delivering seamless and intuitive user
            experiences.
          </div>
        </li>

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Conducted regular code reviews, introduced unit testing, and
            advocated best practices to improve code quality, maintainability,
            and team productivity.
          </div>
        </li>
      </ul>
    </div>
  );
};

const GEHC = () => {
  return (
    <div>
      <h3>
        <span className='text-textGreen tracking-wide underline-transition text-textUnderline'>
          GE Healthcare
        </span>
      </h3>
      <p className='text-xm mt-1 font-medium text-textDark'>
        <i>Software Engineer </i>
      </p>
      <p className='text-sm mt-1 font-medium text-textDark'>
        December 2025 - present
      </p>
      <ul className='mt-6 flex flex-col gap-4'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Worked as a{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Full Stack Developer
            </span>
            , designing and maintaining scalable customer analytics services
            across both frontend and backend systems. Ensured seamless
            integration between components to deliver reliable and
            high-performing applications.
          </div>
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Developed and optimized{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              RESTful APIs
            </span>{' '}
            while enhancing UI components to improve usability and overall user
            experience. Focused on performance tuning, responsiveness, and clean
            interface design.
          </div>
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Collaborated with{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              cross-functional teams
            </span>{' '}
            to deliver end-to-end features, from requirement gathering to
            deployment and support. Ensured timely delivery while maintaining
            high code quality and best engineering practices.
          </div>
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Contributed to{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              AI in SDLC POC
            </span>
            , exploring the use of{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Kiro AI
            </span>{' '}
            to enhance software development workflows. Evaluated its
            effectiveness in improving developer productivity and automating
            repetitive tasks.
          </div>
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Currently part of the{' '}
            <span className='text-textGreen underline-transition text-textUnderline'>
              Security Remediation team
            </span>
            , identifying and analyzing vulnerabilities across multiple
            services. Prioritized issues based on severity (
            <span className='text-textGreen underline-transition text-textUnderline'>
              Critical/High/Medium
            </span>
            ) and implemented effective mitigation strategies.
          </div>
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          <div>
            Designed and implemented secure solutions, ensuring compliance with
            security standards and preventing recurrence of vulnerabilities.
            Strengthened overall system reliability by adopting secure coding
            practices and proactive risk mitigation.
          </div>
        </li>
      </ul>
    </div>
  );
};

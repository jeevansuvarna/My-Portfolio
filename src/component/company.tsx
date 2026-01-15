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
          <div>Joined recently , details will be updated soon.</div>
        </li>
      </ul>
    </div>
  );
};

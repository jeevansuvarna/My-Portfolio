import useScrollReveal from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id='contact'
      ref={ref}
      className={`max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center transition-opacity duration-700 ${
        isVisible ? 'opacity-100 fade-in-up' : 'opacity-0'
      }`}
    >
      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        04. What's Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'> Get in Touch</h2>
      <p className='max-w-[600px] text-center text-textDark'>
        {' '}
        Whether you have a question, any new opporunities or just want to say
        hi, My inbox is always open!{' '}
      </p>
      <a href='mailto:jeevansuvarna71@gmail.com'>
        <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont tet-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>
          Say Hello !!
        </button>
      </a>
    </section>
  );
}

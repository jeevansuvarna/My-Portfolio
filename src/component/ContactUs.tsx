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
        <button className='btn-animated btn-animated-pulse w-44 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md flex items-center justify-center gap-2'>
          <span className='btn-wave' role='img' aria-label='wave'>&#x1F44B;</span>
          <span>Say Hello</span>
        </button>
      </a>
    </section>
  );
}

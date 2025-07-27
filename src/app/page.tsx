'use client';
import About from '@/component/About';
import Banner from '@/component/Banner';
import Contact from '@/component/ContactUs';
import Work from '@/component/Experience';
import Projects from '@/component/Projects';
import FullScreenLoader from '@/component/common/loader';
import Footer from '@/component/footer';
import { useEffect, useState } from 'react';
// import Head from 'next/head'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timeout); // cleanup
  }, []);

  return (
    <div className='h-[88vh] mx-auto p-4'>
      {/* {isLoading && <FullScreenLoader />} */}
      <Banner />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

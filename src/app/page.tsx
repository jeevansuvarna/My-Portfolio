'use client'
import About from '@/component/About'
import Banner from '@/component/Banner'
import Contact from '@/component/ContactUs'
import Work from '@/component/Experience'
import Projects from '@/component/Projects'
import Footer from '@/component/footer'
// import Head from 'next/head'

export default function Home() {
  return (
    <div className='h-[88vh] mx-auto p-4'>
      <Banner />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/component/Navbar';
import LeftSection from '@/component/LeftSection';
import RightSection from '@/component/RightSection';
import Script from 'next/script';
import { useEffect } from 'react';
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const userLocationAndDevice = {
      language: navigator.language, // e.g., "en-US"
      platform: navigator.platform, // e.g., "MacIntel"
      user_agent: navigator.userAgent, // e.g., full browser info
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
    };
    window.gtag('event', 'PORTFOLIO_LOAD', {
      event_category: 'Portfolio',
      event_label: 'Landing',
      language: userLocationAndDevice.language,
      platform: userLocationAndDevice.platform,
      user_agent: userLocationAndDevice.user_agent,
      screen_resolution: userLocationAndDevice.screen_resolution,
    });
  }, []);

  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded&family=Fira+Code&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300&family=Montserrat:wght@300&display=swap'
          rel='stylesheet'
        />
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=G-RDPBH7631P`}
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RDPBH7631P');
          `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ni2h9q5q9y");
              `,
          }}
        />
      </head>
      <body>
        <main className='w-full h-screen overflow-x-hidden overflow-y-scroll font-bodyFont bg-bodyColor text-textLight scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/70'>
          <Navbar />
          <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
            <div className='hidden xl:flex w-32 h-full fixed left-0 bottom-0'>
              <LeftSection />
            </div>
            {children}
            <div className='hidden xl:flex w-32 h-full fixed right-0 bottom-0'>
              <RightSection />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

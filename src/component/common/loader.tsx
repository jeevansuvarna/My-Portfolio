import React from 'react';
import loaderGif from '../../assets/images/loader.gif'; // Replace with your loader GIF path
import Image from 'next/image';

const FullScreenLoader = () => {
  return (
    <div
      className='fixed inset-0 bg-black flex items-center justify-center '
      style={{ zIndex: 1000 }}
    >
      <Image
        src={loaderGif}
        alt='Loading...'
        className='w-20 h-20 object-contain'
      />
    </div>
  );
};

export default FullScreenLoader;

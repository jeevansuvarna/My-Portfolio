import React from 'react';

const FullScreenLoader = () => {
  return (
    <div
      className='fixed inset-0 bg-bodyColor flex items-center justify-center'
      style={{ zIndex: 1000 }}
    >
      <div className='relative w-24 h-24 flex items-center justify-center'>
        <span className='loader-ring loader-ring-outer'></span>
        <span className='loader-ring loader-ring-inner'></span>
        <div className='loader-core'></div>
        <div className='loader-glow'></div>
        <div className='loader-dots'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <style jsx>{`
        .loader-ring {
          position: absolute;
          border-radius: 9999px;
          border: 3px solid transparent;
          background: linear-gradient(135deg, #6366f1 0%, #7678df 100%) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }

        .loader-ring-outer {
          inset: 0;
          animation: spin-clockwise 1.8s linear infinite;
          opacity: 0.9;
        }

        .loader-ring-inner {
          inset: 10px;
          animation: spin-anticlockwise 1.2s linear infinite;
          opacity: 0.7;
        }

        .loader-core {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #6366f1 0%, #7678df 100%);
          animation: pulse 1.4s ease-in-out infinite;
          z-index: 2;
        }

        .loader-glow {
          position: absolute;
          inset: 26px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #6366f1 0%, #7678df 100%);
          filter: blur(10px);
          opacity: 0.35;
          animation: glow 1.6s ease-in-out infinite;
        }

        .loader-dots {
          position: absolute;
          bottom: -18px;
          display: flex;
          gap: 6px;
        }

        .loader-dots span {
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #6366f1 0%, #7678df 100%);
          animation: dot-bounce 1s ease-in-out infinite;
          opacity: 0.8;
        }

        .loader-dots span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .loader-dots span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes spin-clockwise {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-anticlockwise {
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(0.85);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes glow {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.45;
          }
        }

        @keyframes dot-bounce {
          0%,
          80%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          40% {
            transform: translateY(-5px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FullScreenLoader;

import { useEffect } from 'react';
import { applyThemeWithTransition } from '@/utils/themeTransition';

interface ToggleButtonProps {
  className?: string;
}
const ToggleButton: React.FC<ToggleButtonProps> = ({ className }) => {
  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const toggleCircle = document.getElementById('toggle-circle');
    const isDark = html.classList.contains('dark');

    applyThemeWithTransition(event, () => {
      if (isDark) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        html.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      }
    });

    if (isDark) {
      if (themeIcon) themeIcon.textContent = '🌕';
      toggleCircle?.classList.remove('translate-x-8');
    } else {
      if (themeIcon) themeIcon.textContent = '🌙';
      toggleCircle?.classList.add('translate-x-8');
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('jhome');
      const savedTheme = localStorage.getItem('theme') || 'dark';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(savedTheme);
      const themeIcon = document.getElementById('theme-icon');
      console.log(themeIcon, 'theme');
      if (themeIcon) {
        console.log(savedTheme === 'light' ? '🌕' : '🌙', 'check');
        themeIcon.textContent = savedTheme === 'light' ? '🌕' : '🌙';
      }
      const toggleCircle = document.getElementById('toggle-circle');
      if (toggleCircle) {
        toggleCircle.classList.toggle('translate-x-8', savedTheme === 'dark');
      }
    }
  }, []);

  return (
    <button
      id='theme-toggle'
      onClick={toggleTheme}
      className={`${className} relative w-16 h-8 flex items-center border border-gray-500 bg-bodyColor dark:bg-bodyColor rounded-full p-1 transition-colors duration-300`}
    >
      {/* Stars - Visible in Dark Mode */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <span className='hidden dark:inline-block absolute w-1 h-1 bg-white rounded-full top-1 left-2 animate-pulse'></span>
        <span className='hidden dark:inline-block absolute w-1 h-1 bg-white rounded-full top-2 right-3'></span>
        <span className='hidden dark:inline-block absolute w-1.5 h-1.5 bg-white rounded-full top-3 left-4'></span>
        <span className='hidden dark:inline-block absolute w-0.5 h-0.5 bg-white rounded-full top-4 left-1 animate-pulse'></span>
      </div>

      {/* Toggle Circle */}
      <div
        id='toggle-circle'
        className='w-6 h-6  rounded-full shadow-md transform transition-transform duration-300 translate-x-0 flex items-center justify-center'
      >
        <span id='theme-icon' className='text-lg'>
          🌙
        </span>
      </div>
    </button>
  );
};

export default ToggleButton;

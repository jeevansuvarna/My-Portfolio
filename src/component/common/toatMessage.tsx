// components/Toast.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { LuSparkles } from 'react-icons/lu';

export default function Toast({
  message,
  show,
  onClose,
}: {
  message: string;
  show: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -20, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -20, opacity: 0, scale: 0.9 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
            mass: 0.8
          }}
          className='toast-container px-4 py-2.5 rounded-full shadow-lg z-[1000] flex items-center gap-3 text-sm font-medium whitespace-nowrap'
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-lg'
          >
            <LuSparkles className='toast-icon' />
          </motion.span>
          <span>{message}</span>
          <button
            onClick={onClose}
            className='toast-close w-5 h-5 rounded-full flex items-center justify-center transition-colors'
          >
            <MdClose className='text-sm' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

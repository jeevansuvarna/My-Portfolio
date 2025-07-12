// components/Toast.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';

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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className='bottom-6 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full shadow-lg z-[1000] flex items-center gap-4 text-sm'
        >
          <span>{message}</span>
          <button onClick={onClose}>
            <MdClose className='text-lg hover:text-red-400 transition' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

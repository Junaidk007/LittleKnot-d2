import React from 'react';
import { motion } from 'framer-motion';

export default function HangingCharm({ className = "absolute top-0 right-12 z-40", size = "w-14" }) {
  return (
    <motion.div
      style={{ transformOrigin: 'top center' }}
      animate={{ rotate: [-9, 9, -9] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`${className} pointer-events-none drop-shadow-md select-none`}
    >
      <img
        src="/charm.svg"
        alt="Handmade Hanging Crochet Charm"
        className={`${size} object-contain filter drop-shadow-sm`}
      />
    </motion.div>
  );
}

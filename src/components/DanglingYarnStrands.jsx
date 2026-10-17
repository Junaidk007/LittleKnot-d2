import React from 'react';
import { motion } from 'framer-motion';

export default function DanglingYarnStrands({ className = "absolute top-0 right-1/4 pointer-events-none z-10" }) {
  return (
    <div className={className}>
      {/* Strand 1 (Coral) */}
      <motion.div
        style={{ transformOrigin: 'top center' }}
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0"
      >
        <svg width="12" height="110" viewBox="0 0 12 110" fill="none">
          <path
            d="M6 0 C2 30, 10 70, 6 100"
            stroke="#FF6B5E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
          <circle cx="6" cy="103" r="3" fill="#FF6B5E" />
        </svg>
      </motion.div>

      {/* Strand 2 (Sunny Yellow) */}
      <motion.div
        style={{ transformOrigin: 'top center' }}
        animate={{ rotate: [3, -3, 3] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute top-0 left-8"
      >
        <svg width="12" height="140" viewBox="0 0 12 140" fill="none">
          <path
            d="M6 0 C10 40, 2 90, 6 130"
            stroke="#FFC94A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 2.5"
          />
          <circle cx="6" cy="133" r="3.5" fill="#FFC94A" />
        </svg>
      </motion.div>

      {/* Strand 3 (Mint) */}
      <motion.div
        style={{ transformOrigin: 'top center' }}
        animate={{ rotate: [-2.5, 2.5, -2.5] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-0 left-16"
      >
        <svg width="12" height="90" viewBox="0 0 12 90" fill="none">
          <path
            d="M6 0 C3 25, 9 60, 6 82"
            stroke="#7ED9B5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
          <circle cx="6" cy="85" r="3" fill="#7ED9B5" />
        </svg>
      </motion.div>
    </div>
  );
}

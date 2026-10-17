import React from 'react';
import { motion } from 'framer-motion';

export default function YarnDivider({ color = "#FF6B5E", className = "my-12" }) {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center opacity-80 ${className}`}>
      <svg
        viewBox="0 0 1000 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-5xl h-6"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 12 Q 50 0, 100 12 T 200 12 T 300 12 T 400 12 T 500 12 T 600 12 T 700 12 T 800 12 T 900 12 T 1000 12"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="8 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SpatialButton = ({ children, className, onClick, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      onClick={onClick}
      className={cn(
        "modern-button px-6 py-3 rounded-xl tracking-wide shadow-sm relative overflow-hidden group",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">{children}</span>
    </motion.button>
  );
};

export default SpatialButton;

import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`glass rounded-2xl p-6 transition-all duration-300 hover:border-[#6366F1]/20 hover:shadow-lg hover:shadow-[#6366F1]/5 ${className}`}
    >
      {children}
    </motion.div>
  );
}
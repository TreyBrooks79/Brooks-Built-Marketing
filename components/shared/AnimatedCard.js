'use client';
import { motion } from 'framer-motion';

export default function AnimatedCard({ children, className = '', tilt = true, glow = false }) {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-8 ${glow ? 'hover:shadow-[0_0_30px_rgba(212,197,176,0.3)]' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={tilt ? {
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      } : { scale: 1.02 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}

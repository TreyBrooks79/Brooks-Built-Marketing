'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../shared/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Brooks Built Marketing"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Brand Into a Market Leader
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white mb-10 max-w-4xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full-Service Marketing Solutions from A to Z
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button href="/contact" variant="primary" glow={true}>
            Book Free Consultation
          </Button>
          <Button href="/services" variant="outline">
            View Our Services
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator - Outside content container */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-white text-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">↓</div>
      </motion.div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-brand-beige transform rotate-45" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-brand-beige rounded-full" />
        <div className="absolute top-1/2 right-20 w-24 h-24 border-2 border-brand-beige" />
      </div>
    </section>
  );
}

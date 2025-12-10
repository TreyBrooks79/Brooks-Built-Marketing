'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/data/navigation';

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-80 bg-brand-beige z-40 shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="flex flex-col h-full pt-24 px-8">
              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-2xl text-brand-charcoal hover:text-black transition-colors duration-300 block"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pb-8"
              >
                <Link
                  href="/contact"
                  className="block w-full bg-brand-charcoal text-brand-beige px-6 py-4 rounded-lg font-bold text-center hover:bg-black transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Book Discovery Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

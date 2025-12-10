'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({
  children,
  href,
  variant = 'primary',
  glow = false,
  className = '',
  ...props
}) {
  const baseStyles = 'px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-block';

  const variants = {
    primary: 'bg-brand-charcoal text-brand-beige hover:bg-black',
    secondary: 'bg-transparent border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-beige',
    outline: 'bg-transparent border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-beige'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${glow ? 'btn-glow' : ''} ${className}`;

  const ButtonContent = ({ children }) => (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="block"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        <ButtonContent>{children}</ButtonContent>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
}

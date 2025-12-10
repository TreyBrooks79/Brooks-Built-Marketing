'use client';
import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ title, subtitle, centered = true, gradient = false, light = false }) {
  return (
    <ScrollReveal className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${gradient ? 'gradient-text' : light ? 'text-white' : 'text-brand-charcoal'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${light ? 'text-white' : 'text-brand-charcoal'}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}

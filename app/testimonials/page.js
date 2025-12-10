'use client';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCard from '@/components/shared/AnimatedCard';
import Button from '@/components/shared/Button';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="min-h-[60vh] bg-brand-charcoal relative overflow-hidden flex items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-brand-beige rounded-full" />
          <div className="absolute bottom-20 left-20 w-96 h-96 border-2 border-brand-beige transform rotate-45" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-6">
                <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-4">
                  <span className="text-brand-beige font-semibold">Client Success Stories</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  What Our Clients
                  <br />
                  <span className="text-brand-beige">Have to Say</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Real feedback from real clients who've experienced results
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                <AnimatedCard glow={true}>
                  <div className="p-8 md:p-12">
                    <div className="flex justify-center mb-8 text-5xl">
                      {'⭐'.repeat(testimonial.rating)}
                    </div>
                    <blockquote className="text-xl md:text-2xl italic text-brand-charcoal mb-10 leading-relaxed text-center">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="text-center pt-8 border-t border-brand-charcoal/10">
                      <div className="text-brand-charcoal font-bold text-2xl mb-2">
                        {testimonial.name}
                      </div>
                      {testimonial.role && (
                        <div className="text-brand-charcoal/70 text-lg">
                          {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-32 bg-brand-charcoal">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Why Clients Trust Us"
            subtitle="The Brooks Built Marketing difference"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <AnimatedCard>
                <div className="text-center p-8">
                  <div className="text-6xl mb-6">🎯</div>
                  <div className="text-2xl font-bold text-brand-beige mb-4">Full-Service Solutions</div>
                  <p className="text-brand-beige/80 text-lg leading-relaxed">
                    From strategy to execution, we handle everything so you can focus on your business
                  </p>
                </div>
              </AnimatedCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <AnimatedCard>
                <div className="text-center p-8">
                  <div className="text-6xl mb-6">📈</div>
                  <div className="text-2xl font-bold text-brand-beige mb-4">Results-Driven</div>
                  <p className="text-brand-beige/80 text-lg leading-relaxed">
                    Every strategy is designed to deliver measurable growth and ROI
                  </p>
                </div>
              </AnimatedCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <AnimatedCard>
                <div className="text-center p-8">
                  <div className="text-6xl mb-6">🤝</div>
                  <div className="text-2xl font-bold text-brand-beige mb-4">Dedicated Support</div>
                  <p className="text-brand-beige/80 text-lg leading-relaxed">
                    We work as an extension of your team, committed to your long-term success
                  </p>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-beige relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-brand-charcoal rounded-full" />
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-brand-charcoal transform rotate-45" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-brand-charcoal/10 rounded-full mb-8">
                <span className="text-brand-charcoal font-semibold">Ready to Get Started?</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-charcoal leading-tight">
                Join Our Growing List of
                <br />
                <span className="text-brand-charcoal/70">Success Stories</span>
              </h2>
              <p className="text-xl md:text-2xl text-brand-charcoal/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's create a marketing strategy that delivers real results for your business
              </p>
              <div className="inline-block">
                <Button href="/contact" variant="primary" glow={true} className="text-2xl px-12 py-6 shadow-2xl hover:shadow-brand-charcoal/30 transition-all duration-300">
                  Book Your Free Consultation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

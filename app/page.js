'use client';
import HeroSection from '@/components/home/HeroSection';
import AnimatedCard from '@/components/shared/AnimatedCard';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Button from '@/components/shared/Button';
import { serviceOverview, stats } from '@/data/services';
import { processSteps, whyChooseUs } from '@/data/navigation';
import { companyInfo } from '@/data/company';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <section className="py-24 bg-brand-beige">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive marketing solutions to grow your business"
            gradient={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {serviceOverview.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <AnimatedCard glow={true}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-charcoal">{service.title}</h3>
                  <p className="text-brand-charcoal mb-6">{service.description}</p>
                  <a href={service.link} className="text-brand-charcoal hover:text-black font-semibold transition-colors">
                    Learn More →
                  </a>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BBM */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Why Choose Brooks Built Marketing?"
            subtitle="We're more than an agency - we're your growth partner"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <AnimatedCard className="h-full">
                  <div className="flex flex-col h-full min-h-[280px]">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-brand-charcoal">{item.title}</h3>
                    <p className="text-brand-charcoal flex-grow">{item.description}</p>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-brand-beige mb-2">
                    {stat.number}
                  </div>
                  <div className="text-brand-beige text-lg">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-brand-beige">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="How We Work"
            subtitle="Our proven 4-step process to drive your success"
            gradient={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative h-[350px]">
                  <AnimatedCard className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="text-6xl font-bold text-brand-charcoal/20 mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-brand-charcoal">{step.title}</h3>
                      <p className="text-brand-charcoal flex-grow">{step.description}</p>
                    </div>
                  </AnimatedCard>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-[175px] -right-4 transform translate-x-full w-8 text-brand-charcoal text-3xl leading-none">
                      →
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real feedback from real clients"
            light={true}
          />

          <div className="max-w-4xl mx-auto mt-16 space-y-12">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                <AnimatedCard glow={true}>
                  <div className="text-center">
                    <div className="flex justify-center mb-6 text-4xl">
                      {'⭐'.repeat(testimonial.rating)}
                    </div>
                    <p className="text-xl italic text-brand-charcoal mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="text-brand-charcoal font-bold text-lg">
                      {testimonial.name}
                    </div>
                    {testimonial.role && (
                      <div className="text-brand-charcoal/70 text-sm mt-1">
                        {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                      </div>
                    )}
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/testimonials" variant="primary">
              See All Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-charcoal relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-brand-beige rounded-full" />
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-brand-beige transform rotate-45" />
          <div className="absolute bottom-20 right-20 w-64 h-64 border-2 border-brand-beige rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-8">
                <span className="text-brand-beige font-semibold">Let's Get Started</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Ready to Elevate<br />
                <span className="text-brand-beige">Your Marketing?</span>
              </h2>

              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's talk about your goals and create a custom strategy to help you achieve them.
              </p>

              {/* CTA Button */}
              <div className="mb-20">
                <div className="inline-block">
                  <Button href="/contact" variant="primary" glow={true} className="text-2xl px-12 py-6 shadow-2xl hover:shadow-brand-beige/50 transition-all duration-300">
                    Book Your Free Consultation
                  </Button>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full px-4">
                <div className="bg-brand-beige/5 border border-brand-beige/20 rounded-2xl p-16 hover:border-brand-beige/40 transition-all duration-300 min-w-[300px]">
                  <div className="text-4xl mb-4">📞</div>
                  <div className="text-sm text-brand-beige/60 mb-2 uppercase tracking-wider">Phone</div>
                  <a href={companyInfo.phoneLink} className="text-brand-beige hover:text-white text-lg font-semibold transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
                <div className="bg-brand-beige/5 border border-brand-beige/20 rounded-2xl p-16 hover:border-brand-beige/40 transition-all duration-300 min-w-[300px]">
                  <div className="text-4xl mb-4">✉️</div>
                  <div className="text-sm text-brand-beige/60 mb-2 uppercase tracking-wider">Email</div>
                  <a href={companyInfo.emailLink} className="text-brand-beige hover:text-white text-lg font-semibold transition-colors break-words">
                    {companyInfo.email}
                  </a>
                </div>
                <div className="bg-brand-beige/5 border border-brand-beige/20 rounded-2xl p-16 hover:border-brand-beige/40 transition-all duration-300 min-w-[300px]">
                  <div className="text-4xl mb-4">📍</div>
                  <div className="text-sm text-brand-beige/60 mb-2 uppercase tracking-wider">Location</div>
                  <div className="text-brand-beige text-lg font-semibold">Cypress, TX</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

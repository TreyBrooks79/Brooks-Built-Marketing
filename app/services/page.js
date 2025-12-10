'use client';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCard from '@/components/shared/AnimatedCard';
import Button from '@/components/shared/Button';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-brand-charcoal relative overflow-hidden flex items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-brand-beige rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-brand-beige transform rotate-45" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 border-2 border-brand-beige rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-6">
                <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-4">
                  <span className="text-brand-beige font-semibold">Our Services</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Full-Service Marketing
                  <br />
                  <span className="text-brand-beige">Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  From strategy to execution, we handle it all so you can focus on running your business
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, serviceIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-32 ${
            serviceIndex % 2 === 0 ? 'bg-brand-beige' : 'bg-brand-charcoal'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-20">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <div className={`inline-block px-4 py-2 ${serviceIndex % 2 === 0 ? 'bg-brand-charcoal/10' : 'bg-brand-beige/10'} rounded-full mb-6`}>
                    <span className={`${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-brand-beige'} font-semibold`}>
                      {service.id.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-white'}`}>
                    {service.title}
                  </h2>
                  <p className={`text-xl max-w-3xl mx-auto ${serviceIndex % 2 === 0 ? 'text-brand-charcoal/70' : 'text-white/70'}`}>
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.platforms && service.platforms.map((platform, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className={`${serviceIndex % 2 === 0 ? 'bg-white/70' : 'bg-brand-beige/5'} border ${serviceIndex % 2 === 0 ? 'border-brand-charcoal/10' : 'border-brand-beige/20'} rounded-2xl p-8 hover:border-${serviceIndex % 2 === 0 ? 'brand-charcoal/30' : 'brand-beige/40'} transition-all duration-300 h-full`}>
                      <h3 className={`text-2xl font-bold mb-6 ${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-white'}`}>
                        {platform.name}
                      </h3>
                      <ul className="space-y-3">
                        {platform.services.map((s, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-brand-beige'} mr-3 mt-1 text-xl`}>✓</span>
                            <span className={`${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-white/80'} text-lg`}>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}

                {service.services && service.services.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className={`${serviceIndex % 2 === 0 ? 'bg-white/70' : 'bg-brand-beige/5'} border ${serviceIndex % 2 === 0 ? 'border-brand-charcoal/10' : 'border-brand-beige/20'} rounded-2xl p-8 hover:border-${serviceIndex % 2 === 0 ? 'brand-charcoal/30' : 'brand-beige/40'} transition-all duration-300 h-full flex flex-col`}>
                      <h3 className={`text-2xl font-bold mb-4 ${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-white'}`}>
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className={`${serviceIndex % 2 === 0 ? 'text-brand-charcoal/70' : 'text-white/70'} mb-4 text-lg`}>
                          {item.description}
                        </p>
                      )}
                      {item.deliverables && (
                        <ul className="mt-4 space-y-3 flex-grow">
                          {item.deliverables.map((d, i) => (
                            <li key={i} className="flex items-start">
                              <span className={`${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-brand-beige'} mr-3 text-xl`}>•</span>
                              <span className={`${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-white/80'} text-lg`}>{d}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.platforms && (
                        <div className="mt-4 space-y-3">
                          {item.platforms.map((p, i) => (
                            <div key={i} className={`${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-white/80'} text-lg`}>
                              <span className={`${serviceIndex % 2 === 0 ? 'text-brand-charcoal' : 'text-brand-beige'} font-bold`}>{p.platform}:</span> {p.focus}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 bg-brand-charcoal relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-brand-beige rounded-full" />
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-brand-beige transform rotate-45" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-8">
                <span className="text-brand-beige font-semibold">Ready to Grow?</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Ready to Get Started?
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
                Let's create a custom marketing strategy for your business
              </p>
              <div className="inline-block">
                <Button href="/contact" variant="primary" glow={true} className="text-2xl px-12 py-6 shadow-2xl hover:shadow-brand-beige/50 transition-all duration-300">
                  Get a Custom Proposal
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

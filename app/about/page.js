'use client';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCard from '@/components/shared/AnimatedCard';
import Button from '@/components/shared/Button';
import { companyInfo } from '@/data/company';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section - Modern with split layout */}
      <section className="min-h-[70vh] bg-brand-charcoal relative overflow-hidden flex items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-brand-beige rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-brand-beige transform rotate-45" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-6">
                <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-4">
                  <span className="text-brand-beige font-semibold">About Brooks Built Marketing</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Your Partner in<br />
                  <span className="text-brand-beige">Digital Growth</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Full-service marketing solutions designed to transform your brand and drive real, measurable results.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Story - Modern layout */}
      <section className="py-32 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Title */}
                <div>
                  <div className="inline-block px-4 py-2 bg-brand-charcoal/10 rounded-full mb-6">
                    <span className="text-brand-charcoal font-semibold">Our Story</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                    Building Success,<br />One Client at a Time
                  </h2>
                  <div className="w-20 h-1 bg-brand-charcoal"></div>
                </div>

                {/* Right side - Content */}
                <div className="space-y-6 text-lg text-brand-charcoal leading-relaxed">
                  <p>
                    Brooks Built Marketing was founded on a simple belief: businesses deserve a marketing partner they can trust, one that delivers real results without the fluff or empty promises.
                  </p>
                  <p>
                    In today's fragmented marketing landscape, businesses are forced to juggle multiple agencies, freelancers, and platforms just to execute their marketing strategy. We saw this challenge and decided to create a better solution.
                  </p>
                  <p className="font-semibold">
                    A truly full-service marketing agency that handles everything from A to Z - better coordination, consistent branding, and most importantly, better results for your business.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Large card design */}
      <section className="py-32 bg-brand-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-6">
                  <span className="text-brand-beige font-semibold">Our Mission & Vision</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Driven by Purpose
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ScrollReveal>
                <div className="bg-brand-beige/5 border-2 border-brand-beige/20 rounded-3xl p-12 h-full hover:border-brand-beige/40 transition-all duration-300">
                  <div className="text-5xl mb-6">🎯</div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {companyInfo.about.mission}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-brand-beige/5 border-2 border-brand-beige/20 rounded-3xl p-12 h-full hover:border-brand-beige/40 transition-all duration-300">
                  <div className="text-5xl mb-6">🚀</div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {companyInfo.about.vision}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Modern grid */}
      <section className="py-32 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <div className="inline-block px-4 py-2 bg-brand-charcoal/10 rounded-full mb-6">
                  <span className="text-brand-charcoal font-semibold">Our Core Values</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
                  What Drives Us Forward
                </h2>
                <p className="text-xl text-brand-charcoal/70 max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyInfo.about.values.map((value, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-brand-charcoal/10">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-brand-charcoal">{value.title}</h3>
                    <p className="text-brand-charcoal/80 leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-32 bg-brand-charcoal relative overflow-hidden">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #D4C5B0 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-6">
                  <span className="text-brand-beige font-semibold">Our Differentiators</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  What Makes Us Different?
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  Not just another marketing agency
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-brand-beige/5 border border-brand-beige/20 rounded-3xl p-10 hover:border-brand-beige/40 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">🎯</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white">Full-Service, Not Specialized</h3>
                      <p className="text-white/80 text-lg leading-relaxed">
                        Unlike specialized agencies that only handle one aspect of marketing, we cover everything. This means better integration between your campaigns, consistent messaging across all channels, and one point of contact for all your marketing needs.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-brand-beige/5 border border-brand-beige/20 rounded-3xl p-10 hover:border-brand-beige/40 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">🏢</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white">All Services Under One Roof</h3>
                      <p className="text-white/80 text-lg leading-relaxed">
                        No more managing multiple vendors, dealing with communication breakdowns, or worrying about who's responsible for what. With Brooks Built Marketing, you have one dedicated team handling every aspect of your marketing strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-brand-beige/5 border border-brand-beige/20 rounded-3xl p-10 hover:border-brand-beige/40 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">📈</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white">Results-Driven Approach</h3>
                      <p className="text-white/80 text-lg leading-relaxed">
                        We're not here to just create pretty content or run ads. We're here to drive measurable growth for your business. Every strategy, every campaign, every piece of content is designed with your ROI in mind.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="py-32 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <div className="inline-block px-4 py-2 bg-brand-charcoal/10 rounded-full mb-6">
                  <span className="text-brand-charcoal font-semibold">Our Location</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
                  Based in Cypress, Serving Nationwide
                </h2>
                <p className="text-xl text-brand-charcoal/70 max-w-2xl mx-auto">
                  Local expertise with national reach
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-brand-charcoal/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Location Icon */}
                  <div className="text-center lg:text-left">
                    <div className="text-8xl mb-6">📍</div>
                    <h3 className="text-3xl font-bold mb-4 text-brand-charcoal">Our Office</h3>
                    <p className="text-2xl text-brand-charcoal mb-6 font-semibold">
                      {companyInfo.address}
                    </p>
                    <div className="inline-block px-6 py-3 bg-brand-charcoal/5 rounded-full">
                      <span className="text-brand-charcoal font-semibold">Cypress, TX</span>
                    </div>
                  </div>

                  {/* Right side - Service Description */}
                  <div className="space-y-6">
                    <p className="text-lg text-brand-charcoal leading-relaxed">
                      While we're proudly based in Cypress, TX, we work with businesses across the United States.
                    </p>
                    <p className="text-lg text-brand-charcoal leading-relaxed">
                      Whether you're local or remote, we provide the same high-quality service and dedicated support to help your business thrive.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <div className="bg-brand-charcoal/5 rounded-2xl p-6">
                        <div className="text-3xl mb-2">🏢</div>
                        <p className="text-sm font-semibold text-brand-charcoal">Local Presence</p>
                      </div>
                      <div className="bg-brand-charcoal/5 rounded-2xl p-6">
                        <div className="text-3xl mb-2">🌎</div>
                        <p className="text-sm font-semibold text-brand-charcoal">National Reach</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-charcoal relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-brand-beige rounded-full" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-brand-beige transform rotate-45" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border-2 border-brand-beige rounded-full" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-8">
                <span className="text-brand-beige font-semibold">Ready to Get Started?</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Let's Talk About<br />
                <span className="text-brand-beige">Your Goals</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Ready to work with a marketing partner who's invested in your success? Let's start the conversation.
              </p>
              <div className="inline-block">
                <Button href="/contact" variant="primary" glow={true} className="text-2xl px-12 py-6 shadow-2xl hover:shadow-brand-beige/50 transition-all duration-300">
                  Get in Touch
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

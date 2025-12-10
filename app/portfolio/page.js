'use client';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCard from '@/components/shared/AnimatedCard';
import Button from '@/components/shared/Button';

export default function PortfolioPage() {
  const placeholders = [
    { id: 1, title: "E-commerce Success Story", category: "Paid Ads", icon: "🛒" },
    { id: 2, title: "Local Business Growth", category: "Social Media", icon: "📍" },
    { id: 3, title: "Social Media Transformation", category: "Content Marketing", icon: "📱" },
    { id: 4, title: "B2B Lead Generation", category: "Paid Ads", icon: "💼" },
    { id: 5, title: "Brand Awareness Campaign", category: "Social Media", icon: "🎯" },
    { id: 6, title: "Website Redesign & SEO", category: "Web Development", icon: "🌐" },
  ];

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
                  <span className="text-brand-beige font-semibold">Our Work</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Proven Results for
                  <br />
                  <span className="text-brand-beige">Brands Like Yours</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Real success stories and case studies showcasing our results-driven approach
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-32 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <AnimatedCard glow={true}>
                <div className="text-center p-12">
                  <div className="text-7xl mb-8">📊</div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal">
                    Case Studies Coming Soon
                  </h2>
                  <p className="text-xl md:text-2xl text-brand-charcoal/70 mb-8 leading-relaxed">
                    We're compiling detailed success stories from our amazing clients. Check back soon to see real metrics, strategies, and results!
                  </p>
                  <div className="inline-block bg-brand-charcoal/10 text-brand-charcoal px-6 py-3 rounded-full font-bold text-lg">
                    Portfolio Updates Coming Soon
                  </div>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Grid */}
      <section className="py-32 bg-brand-charcoal">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="What's Coming"
            subtitle="Preview of upcoming case studies across different industries"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
            {placeholders.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <AnimatedCard>
                  <div className="p-8">
                    <div className="aspect-video bg-brand-beige/5 border-2 border-brand-beige/20 rounded-2xl mb-6 flex items-center justify-center">
                      <span className="text-7xl">{item.icon}</span>
                    </div>
                    <div className="bg-brand-beige/10 text-brand-beige text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                      {item.category.toUpperCase()}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-beige mb-3">{item.title}</h3>
                    <p className="text-brand-beige/70 text-lg leading-relaxed">
                      Detailed case study with metrics, strategy breakdown, and measurable results.
                    </p>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-32 bg-brand-beige">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="What to Expect in Our Case Studies"
            subtitle="Transparency and detailed insights into our process"
            gradient={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <AnimatedCard>
                <div className="text-center p-8">
                  <div className="text-6xl mb-6">📈</div>
                  <div className="text-2xl font-bold text-brand-charcoal mb-4">Real Metrics</div>
                  <p className="text-brand-charcoal/70 text-lg leading-relaxed">
                    Actual numbers showing ROI, growth percentages, and campaign performance
                  </p>
                </div>
              </AnimatedCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <AnimatedCard>
                <div className="text-center p-8">
                  <div className="text-6xl mb-6">🎯</div>
                  <div className="text-2xl font-bold text-brand-charcoal mb-4">Strategy Breakdown</div>
                  <p className="text-brand-charcoal/70 text-lg leading-relaxed">
                    Behind-the-scenes look at how we planned and executed each campaign
                  </p>
                </div>
              </AnimatedCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <AnimatedCard>
                <div className="text-center p-8">
                  <div className="text-6xl mb-6">💡</div>
                  <div className="text-2xl font-bold text-brand-charcoal mb-4">Key Insights</div>
                  <p className="text-brand-charcoal/70 text-lg leading-relaxed">
                    Lessons learned and actionable takeaways from each success story
                  </p>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-charcoal relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-brand-beige rounded-full" />
          <div className="absolute top-20 left-20 w-64 h-64 border-2 brand-beige transform rotate-45" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-8">
                <span className="text-brand-beige font-semibold">Ready to Get Started?</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Want Results Like These?
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's create your own success story with a custom marketing strategy
              </p>
              <div className="inline-block">
                <Button href="/contact" variant="primary" glow={true} className="text-2xl px-12 py-6 shadow-2xl hover:shadow-brand-beige/50 transition-all duration-300">
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

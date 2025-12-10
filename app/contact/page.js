'use client';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/shared/ScrollReveal';
import GoogleMap from '@/components/contact/GoogleMap';
import FilloutForm from '@/components/contact/FilloutForm';
import { companyInfo } from '@/data/company';

export default function ContactPage() {
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
                  <span className="text-brand-beige font-semibold">Get in Touch</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Let's Grow Your Business
                  <br />
                  <span className="text-brand-beige">Together</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Book your free consultation today and start your journey to marketing success
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <div className="bg-white/70 border border-brand-charcoal/10 rounded-3xl p-10 sticky top-24">
                    <h2 className="text-3xl font-bold mb-8 text-brand-charcoal">Contact Information</h2>

                    <div className="space-y-8">
                      {/* Phone */}
                      <div>
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">📞</div>
                          <div className="flex-1">
                            <div className="text-sm text-brand-charcoal/60 mb-1 uppercase tracking-wider">Phone</div>
                            <a
                              href={companyInfo.phoneLink}
                              className="text-brand-charcoal hover:text-brand-charcoal/70 text-xl font-semibold transition-colors"
                            >
                              {companyInfo.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">✉️</div>
                          <div className="flex-1">
                            <div className="text-sm text-brand-charcoal/60 mb-1 uppercase tracking-wider">Email</div>
                            <a
                              href={companyInfo.emailLink}
                              className="text-brand-charcoal hover:text-brand-charcoal/70 text-xl font-semibold transition-colors break-words"
                            >
                              {companyInfo.email}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">📍</div>
                          <div className="flex-1">
                            <div className="text-sm text-brand-charcoal/60 mb-1 uppercase tracking-wider">Address</div>
                            <p className="text-brand-charcoal text-xl font-semibold">
                              {companyInfo.address}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Hours */}
                      <div>
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">🕒</div>
                          <div className="flex-1">
                            <div className="text-sm text-brand-charcoal/60 mb-1 uppercase tracking-wider">Business Hours</div>
                            <p className="text-brand-charcoal text-xl font-semibold">{companyInfo.hours}</p>
                          </div>
                        </div>
                      </div>

                      {/* Social Media */}
                      <div className="pt-6 border-t border-brand-charcoal/10">
                        <div className="text-sm text-brand-charcoal/60 mb-4 uppercase tracking-wider">Follow Us</div>
                        <div className="flex flex-wrap gap-4">
                          <a
                            href={companyInfo.social.instagram.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-80 p-3 rounded-xl hover:scale-110 transition-all"
                            aria-label="Instagram"
                          >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                          <a
                            href={companyInfo.social.facebook.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#1877F2] hover:opacity-80 p-3 rounded-xl hover:scale-110 transition-all"
                            aria-label="Facebook"
                          >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a
                            href={companyInfo.social.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0A66C2] hover:opacity-80 p-3 rounded-xl hover:scale-110 transition-all"
                            aria-label="LinkedIn"
                          >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          <a
                            href={companyInfo.social.tiktok.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black hover:opacity-80 p-3 rounded-xl hover:scale-110 transition-all"
                            aria-label="TikTok"
                          >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Fillout Form */}
              <div className="lg:col-span-3">
                <ScrollReveal delay={0.2}>
                  <FilloutForm />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-32 bg-brand-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-brand-beige/10 rounded-full mb-6">
                  <span className="text-brand-beige font-semibold">Our Location</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Visit Our Office
                </h2>
                <p className="text-xl text-white/70">
                  Located in Cypress, TX
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden border-2 border-brand-beige/20">
                <GoogleMap />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

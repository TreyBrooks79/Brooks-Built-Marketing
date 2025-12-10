'use client';
import { useEffect } from 'react';

export default function FilloutForm() {
  useEffect(() => {
    // Load Fillout script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white/70 border border-brand-charcoal/10 rounded-3xl p-10">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-brand-charcoal mb-2">Book Your Free Consultation</h3>
        <p className="text-brand-charcoal/70 text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
      </div>

      <div
        style={{ width: '100%', height: '500px' }}
        data-fillout-id="vbmE57fFi3us"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      />
    </div>
  );
}

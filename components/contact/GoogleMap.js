import { companyInfo } from '@/data/company';

export default function GoogleMap() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={companyInfo.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Brooks Built Marketing Location - 20228 Schiel Rd, Cypress, TX 77433"
      />
    </div>
  );
}

import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează-ne pentru informații despre aparate de aer condiționat, piese și servicii. Suntem în Unirea Shopping Center, București.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-dark mb-8">Contactează-ne</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left — form */}
        <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-dark mb-5">Trimite-ne un mesaj</h2>
          <ContactForm />
        </div>

        {/* Right — info + map */}
        <div className="flex flex-col gap-6">
          {/* Contact details */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-dark mb-5">Informații de contact</h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <LocationIcon />
                <div>
                  <p className="font-medium text-gray-800">Adresă</p>
                  <p className="text-gray-500">Unirea Shopping Center</p>
                  <p className="text-gray-500">Piața Unirii nr. 1, Sector 3, București</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon />
                <div>
                  <p className="font-medium text-gray-800">Telefon</p>
                  <a href="tel:+40700000000" className="text-gray-500 hover:text-primary transition-colors">
                    +40 700 000 000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a href="mailto:CristianM@aerconditionatservice.ro" className="text-gray-500 hover:text-primary transition-colors">
                    CristianM@aerconditionatservice.ro
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon />
                <div>
                  <p className="font-medium text-gray-800">Program</p>
                  <p className="text-gray-500">Luni – Vineri: 09:00 – 18:00</p>
                  <p className="text-gray-500">Sâmbătă: 10:00 – 15:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm h-64">
            <iframe
              src="https://maps.google.com/maps?q=Unirea+Shopping+Center+Piata+Unirii+Bucuresti&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație AC Service — Unirea Shopping Center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5 shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary mt-0.5 shrink-0">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary mt-0.5 shrink-0">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5 shrink-0">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

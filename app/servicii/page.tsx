import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicii",
  description: "Servicii profesionale HVAC, HORECA, siguranță, medicale, construcții edilitare și mentenanță preventivă.",
};

const services = [
  {
    href: "/servicii/hvac",
    label: "HVAC",
    description: "Instalare și mentenanță sisteme de climatizare, chillere, centrale de tratare a aerului și pompe de căldură.",
    icon: <HvacIcon />,
  },
  {
    href: "/servicii/horeca",
    label: "HORECA",
    description: "Reparații și service echipamente de bucătărie profesională: cuptoare, frigidere, hote, mixere.",
    icon: <HorecaIcon />,
  },
  {
    href: "/servicii/siguranta",
    label: "Siguranță Profesională",
    description: "Instalare și verificare sisteme de detecție incendiu, stingere, desfumare și antiefracție.",
    icon: <SafetyIcon />,
  },
  {
    href: "/servicii/medical",
    label: "Dispozitive Medicale",
    description: "Reparații echipamente medicale ATI, stomatologice, imagistică și diagnostic.",
    icon: <MedicalIcon />,
  },
  {
    href: "/servicii/edilitare",
    label: "Construcții Edilitare",
    description: "Lucrări de construcții tehnico-edilitare: instalații electrice, sanitare și termice.",
    icon: <EdilitareIcon />,
  },
  {
    href: "/servicii/mentenanta",
    label: "Mentenanță Preventivă",
    description: "Servicii periodice de mentenanță pentru HVAC, HORECA, echipamente medicale și construcții.",
    icon: <MaintenanceIcon />,
  },
];

export default function ServiciiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-dark">Serviciile noastre</h1>
        <p className="text-gray-500 mt-2 max-w-2xl">
          Oferim servicii profesionale cu angajament și pasiune, adaptate nevoilor fiecărui client. Descoperă gama completă de soluții pe care le punem la dispoziția ta.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all group flex flex-col gap-4"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              {s.icon}
            </div>
            <div>
              <h2 className="font-semibold text-gray-dark mb-1 group-hover:text-primary transition-colors">{s.label}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
            <span className="text-sm text-primary font-medium mt-auto">Află mai mult →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function HvacIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h10M7 11h6"/></svg>;
}
function HorecaIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>;
}
function SafetyIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
function MedicalIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
}
function EdilitareIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
}
function MaintenanceIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
}

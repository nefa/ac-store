import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentenanță Preventivă",
  description: "Servicii profesionale de mentenanță preventivă pentru HVAC, HORECA, dispozitive medicale și construcții edilitare.",
};

const platforms = [
  {
    href: "/servicii/hvac",
    label: "HVAC",
    description: "Mentenanță periodică pentru chillere, centrale de tratare a aerului, aparate AC și sisteme termice.",
    icon: <HvacIcon />,
  },
  {
    href: "/servicii/horeca",
    label: "HORECA",
    description: "Verificări și curățări programate pentru echipamentele de bucătărie profesionale.",
    icon: <HorecaIcon />,
  },
  {
    href: "/servicii/medical",
    label: "Dispozitive Medicale",
    description: "Mentenanță preventivă pentru echipamente medicale critice, cu rapoarte de conformitate.",
    icon: <MedicalIcon />,
  },
  {
    href: "/servicii/edilitare",
    label: "Construcții Edilitare",
    description: "Inspecții periodice și lucrări de întreținere pentru instalații electrice, sanitare și termice.",
    icon: <EdilitareIcon />,
  },
];

export default function MentenantaPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-nav text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Servicii</p>
          <h1 className="text-3xl font-bold mb-4">Mentenanță Preventivă</h1>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Echipa noastră specializată asigură servicii de mentenanță profesională pentru o gamă diversă de sectoare. Intervenții rapide, planificare riguroasă și răspuns prompt la urgențe — pentru funcționarea continuă a echipamentelor tale.
          </p>
        </div>
      </div>

      {/* Platforms */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold text-gray-dark mb-2">Platformele pentru care oferim mentenanță</h2>
        <p className="text-gray-500 text-sm mb-8">Servicii periodice programate sau la cerere, adaptate specificului fiecărui sector.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all group flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {p.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-dark mb-1 group-hover:text-primary transition-colors">{p.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 border-t border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-dark mb-8 text-center">De ce mentenanță preventivă?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Costuri reduse", text: "Depistezi problemele înainte să devină costisitoare. Mentenanța preventivă e de 3–5× mai ieftină decât reparația de urgență." },
              { title: "Zero timp mort", text: "Echipamentele funcționează continuu fără întreruperi neașteptate, asigurând continuitatea activității tale." },
              { title: "Durată de viață extinsă", text: "Echipamentele bine întreținute durează cu 30–50% mai mult decât cele fără mentenanță regulată." },
            ].map((b) => (
              <div key={b.title} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-primary mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-dark mb-2">Ai nevoie de servicii de mentenanță preventivă?</p>
            <p className="text-gray-500 text-sm mb-6">Contactează-ne pentru un contract de mentenanță personalizat.</p>
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              Solicită ofertă
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function HvacIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
}
function HorecaIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>;
}
function MedicalIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
}
function EdilitareIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
}

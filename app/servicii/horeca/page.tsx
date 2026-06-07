import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Servicii HORECA",
  description: "Reparații și mentenanță echipamente de bucătărie profesională: cuptoare, frigidere, hote, feliatoare, mixere.",
};

const services = [
  {
    icon: <OvenIcon />,
    title: "Cuptoare, gratare, plite, friteuze",
    description: "Reparații și service pentru toate tipurile de echipamente de gătit profesionale, cu intervenție rapidă pentru minimizarea timpilor de nefuncționare.",
  },
  {
    icon: <FridgeIcon />,
    title: "Frigidere și echipamente frigorifice",
    description: "Service frigidere industriale, vitrine frigorifice și sisteme de refrigerare pentru păstrarea optimă a alimentelor.",
  },
  {
    icon: <MixerIcon />,
    title: "Feliatoare, mixere, malaxoare",
    description: "Reparații echipamente de preparare a alimentelor: feliatoare, mixere planetare, malaxoare și procesatoare de alimente.",
  },
  {
    icon: <HoodIcon />,
    title: "Curățare hote profesionale",
    description: "Curățare și dezinfecție hote de bucătărie cu eliminarea grăsimilor și a depunerilor, conformă cu normele de igienă HACCP.",
  },
];

export default function HorecaPage() {
  return (
    <ServiceLayout
      title="Servicii HORECA"
      description="Specializați în reparații și mentenanță echipamente esențiale din sectorul HoReCa. Atenție la detalii, cunoștințe tehnice solide și promptitudine — garanția funcționării continue a bucătăriei tale profesionale."
      services={services}
    />
  );
}

function OvenIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><rect x="6" y="7" width="12" height="8" rx="1"/><line x1="6" y1="17" x2="6" y2="19"/><line x1="18" y1="17" x2="18" y2="19"/></svg>;
}
function FridgeIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="9" y1="6" x2="9" y2="8"/><line x1="9" y1="14" x2="9" y2="18"/></svg>;
}
function MixerIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 1 5 5v6h-2v-2H9v2H7V7a5 5 0 0 1 5-5z"/><path d="M8 17h8l-1 4H9l-1-4z"/></svg>;
}
function HoodIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l3-5h12l3 5H3z"/><rect x="5" y="8" width="14" height="8" rx="1"/><path d="M8 20h8M12 16v4"/></svg>;
}

import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Reparații Dispozitive Medicale",
  description: "Reparații și mentenanță echipamente medicale: ATI, stomatologie, imagistică, diagnostic in vitro și electromedicale.",
};

const services = [
  {
    icon: <AtiIcon />,
    title: "ATI & Terapie Intensivă",
    description: "Reparații aparate de anestezie, ventilatoare pulmonare, defibrilatoare, incubatoare neonatale și monitoare de semne vitale.",
  },
  {
    icon: <DiagnosticIcon />,
    title: "Diagnostic & Imagistică",
    description: "Service echipamente de imagistică medicală: CT, radiologie dentară, ecografe și analizatoare de hematologie.",
  },
  {
    icon: <SurgicalIcon />,
    title: "Chirurgie & Stomatologie",
    description: "Reparații mese de operație, scaune stomatologice, aspiratoare chirurgicale, lămpi scialioptice și echipamente de laparoscopie.",
  },
  {
    icon: <ElectromedicalIcon />,
    title: "Dispozitive Electromedicale",
    description: "Service aparate EKG, EEG, EMG, ultrasunete terapeutice, aerosoli și echipamente de reabilitare medicală.",
  },
  {
    icon: <SterilizationIcon />,
    title: "Sterilizare & Decontaminare",
    description: "Mentenanță sterilizatoare cu abur, aer cald și oxid de etilenă pentru menținerea parametrilor optimi de funcționare.",
  },
  {
    icon: <HospitalIcon />,
    title: "Uz General Spital",
    description: "Reparații paturi electrohidraulice, tărgi, tensiometre și alte echipamente de uz general spitalicesc.",
  },
];

export default function MedicalPage() {
  return (
    <ServiceLayout
      title="Reparații Dispozitive Medicale"
      description="Ne asigurăm că echipamentele medicale esențiale funcționează la parametri optimi. Intervenții rapide, tehnicieni specializați și respectarea strictă a standardelor de calitate și siguranță."
      services={services}
    />
  );
}

function AtiIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}
function DiagnosticIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>;
}
function SurgicalIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/><path d="M8 12H4M16 12h4"/></svg>;
}
function ElectromedicalIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 10l2 3 3-6 2 3 2-2"/></svg>;
}
function SterilizationIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 8v4l3 3"/></svg>;
}
function HospitalIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M9 22V12h6v10M9 7h1M14 7h1M12 7v4M10 9h4"/></svg>;
}

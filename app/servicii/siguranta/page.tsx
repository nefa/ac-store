import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Echipamente de Siguranță Profesională",
  description: "Instalare, verificare și mentenanță sisteme de detecție incendiu, stingere, desfumare și antiefracție.",
};

const services = [
  {
    icon: <FireDetectionIcon />,
    title: "Detecție incendiu",
    description: "Proiectare și instalare sisteme de detecție și alarmare incendiu: detectoare de fum, centrale de alarmare și sirene.",
  },
  {
    icon: <ExtinguisherIcon />,
    title: "Stingere incendiu",
    description: "Instalare sisteme automate de stingere a incendiilor cu apă, gaz sau aerosoli, adaptate tipului de risc.",
  },
  {
    icon: <SmokeIcon />,
    title: "Trape de desfumare",
    description: "Montaj și verificare trape și sisteme de desfumare pentru evacuarea fumului și gazelor fierbinți în caz de incendiu.",
  },
  {
    icon: <SecurityIcon />,
    title: "Sisteme antiefracție",
    description: "Instalare sisteme de alarmă antiefracție, camere CCTV și control acces pentru securizarea obiectivelor.",
  },
];

export default function SigurantaPage() {
  return (
    <ServiceLayout
      title="Echipamente de Siguranță Profesională"
      description="Instalare, verificare și mentenanță pentru echipamente de siguranță de ultimă generație. Prevenim riscurile și asigurăm protecția persoanelor și a bunurilor prin soluții tehnice avansate."
      services={services}
    />
  );
}

function FireDetectionIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
}
function ExtinguisherIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2h6v4H9z"/><rect x="7" y="6" width="10" height="14" rx="3"/><path d="M12 6v3M7 13h10"/></svg>;
}
function SmokeIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a6 6 0 0 1 6 6c0 4-4 6-4 10H10c0-4-4-6-4-10a6 6 0 0 1 6-6z"/><path d="M8.5 22h7"/><path d="M9.5 19h5"/></svg>;
}
function SecurityIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
}

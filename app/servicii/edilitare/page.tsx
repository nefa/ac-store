import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Construcții Tehnico-Edilitare",
  description: "Lucrări durabile și fiabile de construcții tehnico-edilitare: instalații electrice, sanitare, termice și lucrări edilitare.",
};

const services = [
  {
    icon: <UtilityIcon />,
    title: "Lucrări edilitare",
    description: "Execuție lucrări de infrastructură urbană: rețele de apă, canalizare, drumuri și amenajări exterioare conforme normativelor în vigoare.",
  },
  {
    icon: <ElectricalIcon />,
    title: "Instalații electrice",
    description: "Proiectare și execuție instalații electrice rezidențiale, comerciale și industriale: tablouri electrice, prize, iluminat și automatizări.",
  },
  {
    icon: <PlumbingIcon />,
    title: "Instalații sanitare",
    description: "Montaj instalații de apă rece, apă caldă și canalizare interioară pentru construcții noi și renovări.",
  },
  {
    icon: <ThermalIcon />,
    title: "Instalații termice",
    description: "Execuție instalații de încălzire centrală, pardoseală radiantă și rețele de distribuție agent termic.",
  },
];

export default function EdilitarePage() {
  return (
    <ServiceLayout
      title="Construcții Tehnico-Edilitare"
      description="Experiență vastă în execuția de lucrări de construcții tehnico-edilitare durabile, fiabile și conforme cu cele mai înalte standarde. Management de proiect axat pe detalii, cu soluții inovatoare adaptate nevoilor clientului."
      services={services}
    />
  );
}

function UtilityIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h5l-3 5h3l-5 7v-6h-3l3-6z"/></svg>;
}
function ElectricalIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
}
function PlumbingIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5c0 3 2 5 5 9 3-4 5-6 5-9a5 5 0 0 0-5-5z"/><circle cx="12" cy="7" r="1.5"/><path d="M12 16v6M9 22h6"/></svg>;
}
function ThermalIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>;
}

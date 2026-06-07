import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Servicii HVAC",
  description: "Servicii profesionale HVAC: instalare și mentenanță chillere, centrale de tratare a aerului, aparate aer condiționat, cazane și schimbătoare de căldură.",
};

const services = [
  {
    icon: <ChillerIcon />,
    title: "Chillere",
    description: "Instalare, configurare și mentenanță sisteme chiller pentru răcirea spațiilor comerciale și industriale.",
  },
  {
    icon: <AhuIcon />,
    title: "Centrale de tratare a aerului",
    description: "Proiectare și instalare centrale de tratare a aerului pentru confort termic și calitate superioară a aerului interior.",
  },
  {
    icon: <AcIcon />,
    title: "Aparate AC & Ventiloconvectoare",
    description: "Montaj și service aparate de aer condiționat rezidențiale și comerciale, inclusiv sisteme VRF/VRV.",
  },
  {
    icon: <BoilerIcon />,
    title: "Cazane și centrale termice",
    description: "Instalare și mentenanță cazane pe gaz, centrale termice murale și de pardoseală pentru uz rezidențial și industrial.",
  },
  {
    icon: <PumpIcon />,
    title: "Schimbătoare de căldură",
    description: "Montaj și verificare schimbătoare de căldură și pompe de recirculare pentru sisteme termice eficiente.",
  },
  {
    icon: <HeatPumpIcon />,
    title: "Pompe de căldură",
    description: "Instalare pompe de căldură aer-apă și aer-aer pentru încălzire eficientă cu consum redus de energie.",
  },
];

export default function HvacPage() {
  return (
    <ServiceLayout
      title="Servicii HVAC Profesionale"
      description="Oferim servicii profesionale de instalare și mentenanță pentru sisteme HVAC cu angajament și pasiune. Soluții personalizate pentru fiecare client, cu respectarea celor mai înalte standarde de calitate."
      services={services}
    />
  );
}

function ChillerIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
}
function AhuIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/></svg>;
}
function AcIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h5l-5 5V8z"/><path d="M7 21l5-7 5 7"/></svg>;
}
function BoilerIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6v6l4 2"/></svg>;
}
function PumpIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}
function HeatPumpIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>;
}

import Link from "next/link";
import SearchBar from "./SearchBar";
import TruckAnimation from "./TruckAnimation";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";

const navLinks = [
  {
    label: "Servicii",
    href: "/servicii",
    children: [
      { label: "HVAC", href: "/servicii/hvac" },
      { label: "HORECA", href: "/servicii/horeca" },
      { label: "Siguranță Profesională", href: "/servicii/siguranta" },
      { label: "Dispozitive Medicale", href: "/servicii/medical" },
      { label: "Construcții Edilitare", href: "/servicii/edilitare" },
      { label: "Mentenanță Preventivă", href: "/servicii/mentenanta" },
    ],
  },
  { label: "Aer Conditionat", href: "/produse/aparate" },
  { label: "Piese & Accesorii", href: "/produse/piese" },
  { label: "Oferte", href: "/oferte" },
  { label: "Despre noi", href: "/despre" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* ── Top bar ── */}
      <div className="bg-gray-100 text-gray-700 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-2">
          {/* LEFT: delivery text — hidden on mobile, visible sm+ */}
          <span className="hidden sm:flex items-center gap-1 shrink-0 whitespace-nowrap">
            <span className="sr-only">
              Livrare gratuită la comenzi peste 1500 RON
            </span>
            <TruckAnimation text="Livrare gratuită la comenzi peste 1500 RON" />
          </span>

          {/* CENTER: search bar — hidden on mobile, visible sm+ */}
          <span className="hidden sm:block flex-1 max-w-md">
            <SearchBar />
          </span>

          {/* RIGHT: contact links — always visible */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Phone — always visible */}
            <a
              href="tel:+40700000000"
              className="flex items-center gap-1 hover:underline font-medium whitespace-nowrap"
            >
              <PhoneIcon />
              +40 700 000 000
            </a>

            {/* Email — hidden on mobile & tablet, visible lg+ */}
            <a
              href="mailto:CristianM@aerconditionatservice.ro"
              className="hidden lg:flex items-center gap-1 hover:underline whitespace-nowrap"
            >
              <MailIcon />
              CristianM@aerconditionatservice.ro
            </a>
          </div>
        </div>

        {/* Mobile-only search row — full width, below the top strip */}
        <div className="sm:hidden px-4 pt-2">
          <SearchBar />
        </div>
      </div>

      {/* ── Main header ── */}
      <MobileMenu
        navLinks={navLinks}
        logo={
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/img/microclimasystems.jpeg"
              alt="Logo"
              className="h-16 w-auto bg-[#2dcb74]"
            />
            <span className="text-white font-semibold text-xl tracking-tight">
              AC Service
            </span>
          </Link>
        }
        desktopNav={<NavDropdown navLinks={navLinks} />}
        rightActions={
          <Link
            href="/cos"
            className="relative flex items-center gap-2 bg-[#f66930] hover:bg-[#d9541f] transition-colors text-white text-sm font-semibold px-4 py-2 rounded-md"
          >
            <CartIcon />
            <span className="hidden sm:inline">Coș</span>
            <span className="absolute -top-1.5 -right-1.5 bg-[#2dcb74] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Link>
        }
      />
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.2 4H3V2H1v2h2l3.6 7.6L5.2 14c-.2.3-.2.7 0 1 .2.3.5.5.8.5H19v-2H7.4l1.2-2H17c.8 0 1.4-.4 1.8-1l3.6-6H5.2z" />
    </svg>
  );
}

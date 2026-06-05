import Link from "next/link";

const storeLinks = [
  { label: "Despre noi", href: "/despre" },
  { label: "Termeni și Condiții", href: "/termeni" },
  { label: "Politica de Confidențialitate", href: "/confidentialitate" },
  { label: "Politica de livrare", href: "/livrare" },
  { label: "Contact", href: "/contact" },
];

const clientLinks = [
  { label: "Metode de Plată", href: "/plata" },
  { label: "Politica de Retur", href: "/retur" },
  { label: "ANPC", href: "https://anpc.ro", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Col 1 — Store links */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider mb-4">
            Magazinul Meu
          </h3>
          <ul className="space-y-2">
            {storeLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 — Client links */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider mb-4">
            Clienți
          </h3>
          <ul className="space-y-2">
            {clientLinks.map((l) => (
              <li key={l.href}>
                {l.external ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Company info */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider mb-4">
            Date Comerciale
          </h3>
          <ul className="space-y-1">
            <li className="text-white font-medium">SC AC SERVICE SRL</li>
            <li>J40/0000/2024</li>
            <li>RO 00000000</li>
            <li>Str. Exemplu nr. 1</li>
            <li>București, Sector 1</li>
          </ul>
        </div>

        {/* Col 4 — Payment & copyright */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold uppercase tracking-wider">
            Plată Securizată
          </h3>
          <div className="flex flex-wrap gap-2">
            <PaymentBadge label="Visa" />
            <PaymentBadge label="Mastercard" />
            <PaymentBadge label="Card BT" />
          </div>
          <p className="text-xs text-footer-muted mt-auto">
            © {new Date().getFullYear()} AC Service — Toate drepturile rezervate
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-footer-muted">
        Proiectat și dezvoltat cu <span className="text-primary">♥</span> în România
      </div>
    </footer>
  );
}

function PaymentBadge({ label }: { label: string }) {
  return (
    <span className="border border-primary/30 rounded px-2 py-1 text-xs text-footer-text">
      {label}
    </span>
  );
}

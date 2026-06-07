import Link from "next/link";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  title: string;
  description: string;
  services: Service[];
  ctaText?: string;
};

export default function ServiceLayout({
  title,
  description,
  services,
  ctaText = "Ai nevoie de unul dintre serviciile noastre?",
}: Props) {
  return (
    <>
      {/* Hero */}
      <div className="bg-nav text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Servicii</p>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-300 max-w-2xl leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="font-semibold text-gray-dark mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 border-t border-gray-100 py-12 px-4 text-center">
        <p className="text-lg font-semibold text-gray-dark mb-2">{ctaText}</p>
        <p className="text-gray-500 text-sm mb-6">Echipa noastră este pregătită să te ajute.</p>
        <Link
          href="/contact"
          className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-3 rounded transition-colors"
        >
          Contactează-ne
        </Link>
      </div>
    </>
  );
}

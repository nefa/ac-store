import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug, getAllSlugs } from "@/lib/products";
import ProductGallery from "@/components/product/ProductGallery";
import AddToCartSection from "@/components/product/AddToCartSection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const savings = product.originalPrice
    ? Math.round(product.originalPrice - product.price)
    : null;

  const images = product.images?.length ? product.images : [product.image];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1">
        <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
        <span>/</span>
        <Link href="/produse/aparate" className="hover:text-primary transition-colors">Aparate</Link>
        <span>/</span>
        <span className="text-gray-800 line-clamp-1">{product.name}</span>
      </nav>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left — gallery */}
        <ProductGallery images={images} name={product.name} savings={savings} />

        {/* Right — product info */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-gray-dark leading-snug">
            {product.name}
          </h1>

          {/* Star rating */}
          <StarRating rating={product.rating} count={product.reviewCount} />

          {/* Price */}
          <div>
            <div className="flex items-baseline gap-3 flex-wrap">
              {product.originalPrice && (
                <span className="text-lg text-red-500 line-through font-medium">
                  {fmt(product.originalPrice)}
                </span>
              )}
              <span className="text-3xl font-bold text-gray-900">
                {fmt(product.price)}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">*Prețul afișat include TVA</p>
          </div>

          {/* Stock + delivery */}
          <div className="flex flex-col gap-1 text-sm">
            {product.inStock ? (
              <span className="flex items-center gap-1.5 text-primary font-semibold">
                <CheckIcon /> În stoc
              </span>
            ) : (
              <span className="text-red-500 font-semibold">Stoc epuizat</span>
            )}
            {product.inStock && (
              <span className="text-gray-600">
                <strong>Durata de livrare:</strong> 24–48 h
              </span>
            )}
          </div>

          {/* Add to cart */}
          <AddToCartSection product={product} />

          {/* SKU + phone */}
          {(product.sku) && (
            <p className="text-sm text-gray-500">
              Cod Produs: <strong className="text-gray-800">{product.sku}</strong>
              <span className="mx-3 text-gray-300">|</span>
              Ai nevoie de ajutor?{" "}
              <a href="tel:+40700000000" className="font-bold text-gray-800 hover:text-primary transition-colors">
                +40 700 000 000
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Description + Specs */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {product.description && (
          <div>
            <h2 className="text-lg font-semibold text-gray-dark mb-3">Descriere</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        )}

        {product.specs && product.specs.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-dark mb-3">Specificații tehnice</h2>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 pr-4 text-gray-500 w-1/2">{s.label}</td>
                    <td className="py-2 font-medium text-gray-800">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function fmt(n: number) {
  return n.toLocaleString("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " Lei";
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < full ? "#f59e0b" : "#d1d5db"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="text-sm text-gray-400">({count} recenzii)</span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

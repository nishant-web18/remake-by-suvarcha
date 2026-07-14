import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import hero from "@/assets/hero.png";
import bridal from "@/assets/service-bridal.png";
import party from "@/assets/service-party.png";
import saree from "@/assets/service-saree.png";
import about from "@/assets/about.png";
import img2 from "@/assets/image-2.png";
import img3 from "@/assets/image-3.png";
import img4 from "@/assets/image-4.png";
import img5 from "@/assets/image-5.png";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Bridal Makeup Portfolio | Remake by Suvarcha" },
      { name: "description", content: "Explore the bridal and beauty makeup portfolio of Remake by Suvarcha — luxury looks captured in exquisite detail." },
      { property: "og:title", content: "Gallery — Remake by Suvarcha" },
      { property: "og:description", content: "Bridal & beauty artistry captured in exquisite detail." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const images = [
  { src: hero, label: "Bridal · Gold" },
  { src: img3, label: "Bridal · Red" },
  { src: bridal, label: "Bridal · Soft Glam" },
  { src: img4, label: "Editorial · Lip" },
  { src: party, label: "Party · Bold" },
  { src: img5, label: "Bridal · Floral" },
  { src: saree, label: "Draping · Gold" },
  { src: img2, label: "Hair · Editorial" },
  { src: about, label: "Kit · Detail" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-10 pt-28 md:pt-32 text-center">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-4 text-5xl md:text-6xl text-brown">The Gallery</h1>
        <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          A curated look book of bridal grandeur, editorial artistry and quiet moments of craft.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 mt-14">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="group block w-full rounded-3xl overflow-hidden shadow-soft hover:shadow-luxe transition-all duration-500 relative">
              <img src={img.src} alt={img.label} loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <span className="text-cream text-sm tracking-widest uppercase">{img.label}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[60] bg-brown/95 backdrop-blur-sm p-5 md:p-12 flex items-center justify-center" onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 h-12 w-12 rounded-full bg-cream/10 text-cream grid place-items-center hover:bg-cream hover:text-brown transition"
            onClick={() => setActive(null)} aria-label="Close">
            <X size={22} />
          </button>
          <img src={images[active].src} alt={images[active].label}
            className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-luxe fade-up" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

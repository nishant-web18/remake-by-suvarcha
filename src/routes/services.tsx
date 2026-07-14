import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";
import bridal from "@/assets/service-bridal.png";
import party from "@/assets/service-party.png";
import saree from "@/assets/service-saree.png";
import img2 from "@/assets/image-2.png";
import img3 from "@/assets/image-3.png";
import img4 from "@/assets/image-4.png";
import img5 from "@/assets/image-5.png";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Bridal, HD, Airbrush Makeup | Remake by Suvarcha" },
      { name: "description", content: "Bridal, engagement, reception, party, HD & airbrush makeup, hairstyling and saree draping — luxury services by Suvarcha." },
      { property: "og:title", content: "Services — Remake by Suvarcha" },
      { property: "og:description", content: "Luxury bridal & makeup services designed around you." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { title: "Bridal Makeup", price: "₹ 25,000", desc: "Complete bridal glam — HD/airbrush base, eyes, lashes, lips, hair & drape.", img: bridal, feats: ["Trial available", "HD/Airbrush finish", "Hair styling included"] },
  { title: "Engagement Makeup", price: "₹ 15,000", desc: "Radiant, romantic look for your engagement ceremony.", img: img3, feats: ["Soft glam", "Long-lasting", "Hair styling"] },
  { title: "Reception Makeup", price: "₹ 18,000", desc: "Statement look — bold eyes, dewy skin, cinematic finish.", img: img5, feats: ["HD finish", "Bold or soft", "Hair styling"] },
  { title: "Party Makeup", price: "₹ 6,500", desc: "Effortless glamour for cocktails, sangeet & soirées.", img: party, feats: ["Camera-ready", "Quick turnaround", "All skin types"] },
  { title: "HD Makeup", price: "₹ 8,500", desc: "Flawless high-definition base for photography & film.", img: img4, feats: ["Photo-friendly", "Long wearing", "Premium products"] },
  { title: "Airbrush Makeup", price: "₹ 10,500", desc: "Weightless, second-skin finish with airbrush artistry.", img: bridal, feats: ["Feather-light", "Water resistant", "Poreless finish"] },
  { title: "Hairstyling", price: "₹ 4,500", desc: "Sculpted buns, romantic curls & bridal styling.", img: img2, feats: ["Bridal & party", "Accessories included", "Personalised"] },
  { title: "Saree Draping", price: "₹ 2,500", desc: "Precise pleats in classic and modern styles.", img: saree, feats: ["Multiple styles", "Pins & tucks", "Fast setup"] },
];

const faqs = [
  { q: "Do you offer bridal trials?", a: "Yes — bridal trials are strongly recommended and included with the bridal package." },
  { q: "Do you travel for weddings?", a: "Absolutely. Suvarcha travels across India and internationally. Travel costs are billed separately." },
  { q: "What products do you use?", a: "Only premium, dermatologist-tested brands — Charlotte Tilbury, MAC, Huda Beauty, Bobbi Brown and more." },
  { q: "How do I book my date?", a: "Reach out via WhatsApp, call or the contact form. A 30% retainer secures your date." },
  { q: "How long does a bridal look take?", a: "Typically 2.5 – 3.5 hours including hair and drape." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((f, i) => (
        <div key={i} className="border-b border-border">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full py-6 flex items-center justify-between text-left gap-4">
            <span className="text-lg md:text-xl text-brown font-display">{f.q}</span>
            {open === i ? <Minus className="text-brown shrink-0" size={20} /> : <Plus className="text-brown shrink-0" size={20} />}
          </button>
          {open === i && <p className="pb-6 text-muted-foreground leading-relaxed">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <>
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 pt-10 md:pt-16 text-center">
        <p className="eyebrow">Our Services</p>
        <h1 className="mt-4 text-5xl md:text-6xl text-brown">Signature Makeup Services</h1>
        <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          A refined menu of bridal and beauty services — every look is built around you, with premium products and unhurried care.
        </p>
      </section>

      {/* SERVICE GRID */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 mt-14 md:mt-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <article key={s.title} className="group rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-2xl text-brown">{s.title}</h2>
                  <span className="shrink-0 rounded-full bg-cream text-brown px-3 py-1 text-sm font-medium">{s.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.feats.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={14} className="text-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="max-w-4xl mx-auto px-5 md:px-10 mt-20 text-center">
        <div className="rounded-3xl p-10 md:p-14" style={{ background: "var(--gradient-warm)" }}>
          <p className="eyebrow">Custom Packages</p>
          <h2 className="mt-3 text-3xl md:text-4xl text-brown">Bridal packages tailored to you</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Multi-day bridal packages, group discounts and travel bookings available on request.</p>
          <Link to="/contact" className="btn-primary mt-6">Request Quote</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 mt-24 md:mt-32">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">FAQs</p>
          <h2 className="mt-3 text-4xl md:text-5xl text-brown">Good to know</h2>
        </div>
        <div className="mt-12"><FAQ /></div>
      </section>
    </>
  );
}

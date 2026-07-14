import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Sparkles, Heart, Award, ArrowRight, Instagram, Quote } from "lucide-react";
import { motion } from "framer-motion";
import hero from "@/assets/hero.png";
import about from "@/assets/about.png";
import img2 from "@/assets/image-2.png";
import img3 from "@/assets/image-3.png";
import img4 from "@/assets/image-4.png";
import img5 from "@/assets/image-5.png";
import bridal from "@/assets/service-bridal.png";
import party from "@/assets/service-party.png";
import saree from "@/assets/service-saree.png";
import suvarcha from "@/assets/suvarcha.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Remake by Suvarcha — Luxury Bridal Makeup Artist" },
      { name: "description", content: "Suvarcha creates timeless bridal, engagement and party makeup looks with premium HD, airbrush artistry, hairstyling and saree draping." },
      { property: "og:title", content: "Remake by Suvarcha — Luxury Bridal Makeup Artist" },
      { property: "og:description", content: "Bespoke bridal & luxury makeup artistry crafted to celebrate your most beautiful moments." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  { title: "Bridal Makeup", desc: "Timeless bridal artistry for your once-in-a-lifetime day.", img: bridal },
  { title: "Engagement Look", desc: "Radiant, romantic looks tailored to your celebration.", img: img3 },
  { title: "Party & HD Makeup", desc: "Camera-ready glamour with flawless HD finish.", img: party },
  { title: "Hairstyling & Draping", desc: "Elegant hair sculpting and precise saree draping.", img: saree },
];

const testimonials = [
  { name: "Aanya Sharma", role: "Bride", text: "Suvarcha understood exactly what I wanted. My bridal look was breathtaking — every guest complimented the artistry." },
  { name: "Ritika Verma", role: "Engagement", text: "Beyond talented. The airbrush finish stayed flawless from morning ceremony through late-night dinner." },
  { name: "Prisha Kapoor", role: "Reception", text: "A truly premium experience. Warm, calm, precise — and the results speak for themselves." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-0 md:px-10 pt-0 md:pt-10">
          <div className="relative rounded-none md:rounded-[2rem] overflow-hidden shadow-luxe">
            <img src={hero} alt="Bridal makeup by Remake by Suvarcha" width={1600} height={1808}
              className="w-full h-[100svh] md:h-[86vh] object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/95 via-brown/40 to-brown/10" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brown/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 pb-24 md:pb-16">
              <motion.div 
                initial="hidden" animate="visible" variants={fadeUp} 
                className="max-w-2xl"
              >
                <p className="eyebrow text-gold-soft">Pure Beauty · Real Artistry</p>
                <h1 className="mt-4 text-cream text-[3.25rem] leading-[1.05] tracking-tight md:text-7xl md:leading-[1.02]">
                  Bridal Beauty,<br /><em className="text-gold-soft not-italic font-normal">Expertly Crafted.</em>
                </h1>
                <p className="mt-6 text-cream/85 text-lg max-w-lg leading-relaxed font-light">
                  Luxury makeup artistry by Suvarcha — designed for brides who value grace, precision, and unforgettable moments.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-gold">Book Appointment <ArrowRight size={18} /></Link>
                  <Link to="/gallery" className="btn-outline !border-cream !text-cream hover:!bg-cream hover:!text-brown">View Gallery</Link>
                </div>
                <div className="mt-12 flex items-center gap-3 text-cream/90">
                  <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-gold-soft text-gold-soft" />)}</div>
                  <span className="text-sm font-light tracking-wide">Trusted by 500+ happy brides</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / ABOUT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28 md:mt-40 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img src={img4} alt="Makeup detail" loading="lazy" className="rounded-3xl aspect-[3/4] object-cover w-full shadow-soft" />
            <img src={about} alt="Premium makeup products" loading="lazy" width={1200} height={1400} className="rounded-3xl aspect-[3/4] object-cover w-full mt-10 shadow-soft" />
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="order-1 md:order-2">
          <p className="eyebrow">About Remake</p>
          <h2 className="mt-4 text-[2.75rem] leading-[1.1] md:text-5xl text-brown tracking-tight">
            Only premium products.<br />Timeless, personalised looks.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg font-light">
            Remake by Suvarcha is where craft meets calm. Every look is designed around you — your features, your outfit, your story — using only luxury cosmetics and world-class techniques.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border/60 py-8">
            <div><p className="text-4xl md:text-5xl font-display text-brown">500+</p><p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Brides</p></div>
            <div><p className="text-4xl md:text-5xl font-display text-brown">8+</p><p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Years</p></div>
            <div><p className="text-4xl md:text-5xl font-display text-brown">100%</p><p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Loved</p></div>
          </div>
          <Link to="/services" className="btn-primary mt-10">Explore Services</Link>
        </motion.div>
      </section>

      {/* MEET THE ARTIST */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32 md:mt-40">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="rounded-[2.5rem] overflow-hidden bg-cream p-10 md:p-20 grid md:grid-cols-2 gap-16 items-center shadow-soft">
          <div className="order-2 md:order-1">
            <p className="eyebrow">The Artist</p>
            <h2 className="mt-4 text-[2.75rem] leading-[1.1] md:text-5xl text-brown tracking-tight">
              Meet Suvarcha
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg font-light">
              With over 8 years of professional bridal and luxury makeup artistry, Suvarcha is dedicated to crafting timeless, elegant transformations. Her signature style focuses on enhanced natural features, radiant skin, and precision details that look flawless in person and on camera.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg font-light">
              Serving Jaipur and traveling across India, Suvarcha uses only the world's most premium cosmetics to ensure a comfortable, high-end experience on your special day.
            </p>
            <div className="mt-10 flex gap-4">
              <a href="https://www.instagram.com/remakebysuvarcha" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
                <Instagram size={18} /> Follow Suvarcha
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe border border-cream/20">
              <img src={suvarcha} alt="Suvarcha - Founder & Lead Artist" loading="lazy" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32 md:mt-40">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow">Signature Services</p>
            <h2 className="mt-4 text-[2.75rem] leading-[1.1] md:text-5xl text-brown tracking-tight">Curated with love</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg font-light pb-2">From bridal grandeur to intimate soirées — every look is designed to be uniquely yours.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(s => (
            <motion.div variants={fadeUp} key={s.title} className="group rounded-[2rem] overflow-hidden bg-card shadow-soft hover:shadow-luxe transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-brown">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-32 md:mt-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-4 text-[2.75rem] leading-[1.1] md:text-5xl text-brown tracking-tight">Expert care, premium beauty</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: "Experienced Artist", desc: "Suvarcha brings years of professional bridal experience." },
              { icon: Sparkles, title: "Luxury Products", desc: "Only globally renowned, skin-safe premium brands." },
              { icon: Heart, title: "Personalised Care", desc: "Every look is tailored to your features and story." },
              { icon: Star, title: "Hygienic Setup", desc: "Sanitised tools, single-use applicators, spotless kits." },
            ].map(f => (
              <motion.div variants={fadeUp} key={f.title} className="rounded-[2rem] bg-background p-10 shadow-soft hover:-translate-y-2 transition-transform duration-500">
                <div className="h-14 w-14 rounded-2xl bg-gradient-gold grid place-items-center text-brown" style={{ background: "var(--gradient-gold)" }}>
                  <f.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="mt-8 text-2xl text-brown">{f.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32 md:mt-40">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-4 text-[2.75rem] leading-[1.1] md:text-5xl text-brown tracking-tight">Recent artistry</h2>
          </div>
          <Link to="/gallery" className="btn-outline self-start">View Full Gallery <ArrowRight size={16} /></Link>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[img3, img5, img4, img2].map((src, i) => (
            <motion.div variants={fadeUp} key={i} className={`rounded-[2rem] overflow-hidden shadow-soft ${i % 2 ? "md:mt-12" : ""}`}>
              <img src={src} alt="Portfolio" loading="lazy" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32 md:mt-40">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Kind Words</p>
          <h2 className="mt-4 text-[2.75rem] leading-[1.1] md:text-5xl text-brown tracking-tight">Loved by brides</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map(t => (
            <motion.div variants={fadeUp} key={t.name} className="rounded-[2rem] bg-card p-10 shadow-soft">
              <Quote className="text-gold-soft" size={32} strokeWidth={1} />
              <p className="mt-6 text-foreground/85 leading-loose italic font-display text-lg">"{t.text}"</p>
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-brown font-medium text-lg">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* INSTAGRAM */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32 md:mt-40">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <p className="eyebrow">Follow the journey</p>
          <h2 className="mt-4 text-[2.75rem] leading-[1.1] md:text-5xl text-brown tracking-tight">@remakebysuvarcha</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[img2, img3, img4, img5].map((src, i) => (
            <motion.a variants={fadeUp} key={i} href="https://www.instagram.com/remakebysuvarcha" target="_blank" rel="noreferrer"
              className="group relative rounded-[2rem] overflow-hidden aspect-square shadow-soft">
              <img src={src} alt="Instagram post" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid place-items-center">
                <Instagram className="text-cream" size={32} strokeWidth={1.5} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 mt-32 md:mt-40 mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-24 text-center" style={{ background: "var(--gradient-warm)" }}>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="mt-4 text-4xl md:text-6xl text-brown max-w-3xl mx-auto leading-tight tracking-tight">Let's craft a look you'll never forget.</h2>
          <p className="mt-6 text-brown/70 max-w-xl mx-auto text-lg font-light">Reserve your date with Suvarcha. Bridal calendar books quickly — reach out to secure your consultation.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Book Appointment</Link>
            <a href="https://wa.me/918385010524" target="_blank" rel="noreferrer" className="btn-outline">WhatsApp Now</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Phone, MessageCircle, Instagram, Menu, X } from "lucide-react";

const PHONE = "+918385010524";
const WHATSAPP = "918385010524";
const INSTAGRAM = "https://www.instagram.com/remakebysuvarcha";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const { location } = useRouterState();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);
  const solid = true;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-background/95 backdrop-blur-xl ${scrolled ? "border-b border-border/60 shadow-[0_4px_30px_-15px_rgba(60,30,20,0.2)]" : "border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none group shrink-0">
          <span className={`font-display italic text-[1.7rem] md:text-[1.9rem] transition-colors ${solid ? "text-brown" : "text-cream"}`} style={{ fontVariationSettings: '"opsz" 144' }}>Remake</span>
          <span className={`eyebrow text-[0.6rem] mt-0.5 tracking-[0.35em] transition-colors ${solid ? "text-brown/70" : "text-gold-soft"}`}>by Suvarcha</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          {nav.map(n => (
            <Link key={n.to} to={n.to}
              className={`text-[0.8rem] tracking-[0.18em] uppercase transition-colors relative py-2 ${solid ? "text-foreground/75 hover:text-brown" : "text-cream/90 hover:text-gold-soft"}`}
              activeProps={{ className: solid ? "!text-brown font-medium" : "!text-gold-soft font-medium" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className={`hidden md:inline-flex text-xs tracking-[0.18em] uppercase items-center gap-2 px-6 py-3 rounded-full transition-all ${solid ? "bg-brown text-cream hover:bg-brown/90" : "bg-cream/95 text-brown hover:bg-cream"} shadow-soft`}>Book Now</Link>
        <button className={`md:hidden p-2 transition-colors ${solid ? "text-brown" : "text-cream"}`} onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "max-h-96 border-t border-border/50 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-5 py-6 flex flex-col gap-5 bg-background/98 backdrop-blur-xl">
          {nav.map(n => (
            <Link key={n.to} to={n.to} className="text-[0.95rem] tracking-[0.15em] uppercase text-foreground/85 hover:text-brown"
              activeProps={{ className: "text-brown font-medium" }}>{n.label}</Link>
          ))}
          <Link to="/contact" className="btn-primary mt-2">Book Appointment</Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-brown text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-3xl text-cream">Remake</h3>
          <p className="eyebrow text-cream/70 mt-1">by Suvarcha</p>
          <p className="mt-6 text-cream/75 leading-relaxed max-w-xs">
            Bespoke bridal & luxury makeup artistry crafted to celebrate your most beautiful moments.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold-soft">Contact</p>
          <ul className="mt-5 space-y-3 text-cream/85">
            <li><a href={`tel:${PHONE}`} className="hover:text-gold-soft flex items-center gap-3"><Phone size={16} /> +91 83850 10524</a></li>
            <li><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="hover:text-gold-soft flex items-center gap-3"><MessageCircle size={16} /> WhatsApp</a></li>
            <li><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-gold-soft flex items-center gap-3"><Instagram size={16} /> @remakebysuvarcha</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold-soft">Explore</p>
          <ul className="mt-5 space-y-3 text-cream/85">
            {nav.map(n => <li key={n.to}><Link to={n.to} className="hover:text-gold-soft">{n.label}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 text-xs text-cream/60 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Remake by Suvarcha. All rights reserved.</p>
          <p>Crafted with elegance.</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3">
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
        className="h-14 w-14 rounded-full bg-[#25D366]/90 backdrop-blur-md text-white grid place-items-center shadow-luxe hover:scale-110 hover:bg-[#25D366] transition-all duration-300"
        aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12.012 2c-5.506 0-9.978 4.471-9.978 9.978 0 1.764.459 3.49 1.33 5.009l-1.419 5.191 5.309-1.392a9.929 9.929 0 0 0 4.753 1.213h.005c5.505 0 9.977-4.47 9.977-9.979C21.989 6.471 17.517 2 12.012 2zm5.789 14.18c-.242.678-1.212 1.25-1.666 1.309-.434.056-.99.077-2.909-.716-2.455-1.014-4.041-3.522-4.164-3.687-.123-.165-1.002-1.335-1.002-2.547 0-1.212.636-1.808.862-2.05.226-.242.493-.303.658-.303.165 0 .33 0 .474.007.152.007.356-.057.556.425.206.497.703 1.713.765 1.838.062.124.103.268.02.433-.082.165-.124.268-.247.412-.124.145-.261.323-.372.434-.124.124-.253.258-.108.506.145.247.643 1.057 1.378 1.711.949.846 1.748 1.109 2.001 1.233.253.124.4-.02.548-.192.15-.172.643-.748.814-.99.172-.243.344-.206.578-.119.234.088 1.486.702 1.742.83.256.128.428.192.49.299.062.107.062.614-.18 1.292z"/>
        </svg>
      </a>
      <a href={INSTAGRAM} target="_blank" rel="noreferrer"
        className="h-14 w-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-95 backdrop-blur-md text-white grid place-items-center shadow-luxe hover:scale-110 hover:opacity-100 transition-all duration-300"
        aria-label="Instagram">
        <Instagram size={24} />
      </a>
      <a href={`tel:${PHONE}`}
        className="h-14 w-14 rounded-full bg-brown/90 backdrop-blur-md text-cream grid place-items-center shadow-luxe hover:scale-110 hover:bg-brown transition-all duration-300"
        aria-label="Call">
        <Phone size={22} />
      </a>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export { PHONE, WHATSAPP, INSTAGRAM };

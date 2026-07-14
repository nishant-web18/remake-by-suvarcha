import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, Instagram, MapPin, Mail, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Book Your Appointment | Remake by Suvarcha" },
      { name: "description", content: "Book your bridal or beauty appointment with Suvarcha. Call, WhatsApp or send a message — we respond within 24 hours." },
      { property: "og:title", content: "Contact Remake by Suvarcha" },
      { property: "og:description", content: "Book your bridal or beauty appointment with Suvarcha." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Bridal Makeup", date: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Suvarcha,%0A%0AI'd like to book an appointment.%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0ADate: ${form.date}%0A%0A${form.message}`;
    window.open(`https://wa.me/918385010524?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-10 pt-28 md:pt-32 text-center">
        <p className="eyebrow">Get in Touch</p>
        <h1 className="mt-4 text-5xl md:text-6xl text-brown">Let's plan your look</h1>
        <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Reach out for consultations, bridal bookings and custom packages. We reply within 24 hours.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 mt-14 grid gap-6 md:grid-cols-3">
        {[
          { icon: Phone, label: "Call", value: "+91 83850 10524", href: "tel:+918385010524", cta: "Call Now" },
          { icon: MessageCircle, label: "WhatsApp", value: "+91 83850 10524", href: "https://wa.me/918385010524", cta: "WhatsApp Now" },
          { icon: Instagram, label: "Instagram", value: "@remakebysuvarcha", href: "https://www.instagram.com/remakebysuvarcha", cta: "Follow" },
        ].map(c => (
          <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
            className="rounded-3xl bg-card p-8 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all">
            <div className="h-12 w-12 rounded-2xl grid place-items-center text-brown" style={{ background: "var(--gradient-gold)" }}>
              <c.icon size={22} />
            </div>
            <p className="eyebrow mt-6">{c.label}</p>
            <p className="mt-2 text-xl text-brown font-display">{c.value}</p>
            <p className="mt-4 text-sm text-brown font-medium">{c.cta} →</p>
          </a>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 mt-20 grid gap-12 lg:grid-cols-2">
        <div className="rounded-3xl bg-card p-8 md:p-12 shadow-soft">
          <h2 className="text-3xl md:text-4xl text-brown">Send a message</h2>
          <p className="mt-2 text-muted-foreground text-sm">We'll take you to WhatsApp with your details prefilled.</p>
          <form onSubmit={onSubmit} className="mt-8 grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" value={form.name} onChange={v => setForm({ ...form, name: v })} required />
              <Field label="Phone" value={form.phone} onChange={v => setForm({ ...form, phone: v })} required />
            </div>
            <Field label="Email" type="email" value={form.email} onChange={v => setForm({ ...form, email: v })} />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="eyebrow block mb-2">Service</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  {["Bridal Makeup","Engagement","Reception","Party Makeup","HD Makeup","Airbrush","Hairstyling","Saree Draping"].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <Field label="Event Date" type="date" value={form.date} onChange={v => setForm({ ...form, date: v })} />
            </div>
            <div>
              <label className="eyebrow block mb-2">Message</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                className="w-full rounded-3xl border border-input bg-background px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="submit" className="btn-primary">
              {sent ? "Opened WhatsApp ✓" : <>Send via WhatsApp <Send size={16} /></>}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3] bg-muted">
            <iframe title="Location" className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8823126786847!2d75.755395617!3d26.865913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db597430e8233%3A0xb122349549167f3c!2sRemake+by+Suvarcha!5e0!3m2!1sen!2sin!4v1700000000000"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="rounded-3xl bg-cream p-8">
            <p className="eyebrow">Studio & Location</p>
            <div className="mt-4 space-y-3 text-foreground/80">
              <p className="flex items-start gap-3"><MapPin size={18} className="text-brown mt-0.5 shrink-0" /> 38/244, 1st Floor, Madhyam Marg, Near Rajat Path Crossing, Mansarovar, Jaipur - 302020</p>
              <p className="flex items-start gap-3"><Mail size={18} className="text-brown mt-0.5 shrink-0" /> hello@remakebysuvarcha.com</p>
              <p className="flex items-start gap-3"><Phone size={18} className="text-brown mt-0.5 shrink-0" /> +91 83850 10524</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}{required && " *"}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} required={required}
        className="w-full rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

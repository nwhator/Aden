import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="pt-28 bg-surface text-onSurface">
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 mt-16 lg:order-1 lg:mt-0">
          <h1 className="text-5xl font-serif leading-tight sm:text-6xl">Book a Private <span className="italic text-primary">Consultation</span></h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-stone-400">
            Experience the art of bespoke shoemaking in our private atelier. A personalized journey from first measurement to the final stitch.
          </p>
          <div className="mt-12 space-y-6 text-sm uppercase tracking-[0.35em] text-primary">
            <a className="flex items-center gap-4" href="mailto:atelier@aden.com">
              <span className="inline-block h-px w-16 bg-primary" /> atelier@aden.com
            </a>
            <a className="flex items-center gap-4" href="https://wa.me/123456789">
              <span className="inline-block h-px w-16 bg-primary" /> WhatsApp Concierge
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surfaceContainerLow">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW3R9UCorU0CINNBwQphVz8Jlab7LRMxWHX93m6oqJQoLn-sfs8UsHK7O9D4LfzuOCqYrNiNl7fmbaUibQP2dmTuFG7l4S1zeFdvSk0oYpRLcjHtYZojyim2GNeCXwRTD_ngMq4mZoDVObqbMFlt8sPnHRNseUDhjHDBp7uY-RH-hy48R85xMzoSeQse18CaWHh-W3N3zLaKgZZbbBxO3-HRdj9sIwANpxHjoT-hDSQJY4hq46gPPEn11xmrsTUuZoQCawcopuBso"
              alt="Artisan leather studio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-surfaceContainerLowest px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-primary">Reservation Request</p>
            <h2 className="mt-4 text-3xl font-serif">Tell Us Your Requirements</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {[
              { label: 'Full Name', placeholder: 'ALEXANDER VOGUE', type: 'text' },
              { label: 'Email Address', placeholder: 'CONTACT@DOMAIN.COM', type: 'email' },
              { label: 'Desired Date', placeholder: 'OCTOBER 24, 2024', type: 'text' },
              { label: 'Service Type', placeholder: 'BESPOKE FOOTWEAR', type: 'text' },
            ].map((field) => (
              <label key={field.label} className="space-y-2 text-xs uppercase tracking-[0.35em] text-stone-400">
                <span>{field.label}</span>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-sm border-b border-[#4e4639] bg-transparent px-4 py-4 text-sm text-onSurface outline-none focus:border-primary"
                />
              </label>
            ))}
          </div>
          <label className="mt-10 block space-y-2 text-xs uppercase tracking-[0.35em] text-stone-400">
            <span>Special Requests or Measurements</span>
            <textarea
              rows={5}
              placeholder="DESCRIBE YOUR VISION..."
              className="w-full rounded-sm border-b border-[#4e4639] bg-transparent px-4 py-4 text-sm text-onSurface outline-none focus:border-primary"
            />
          </label>
          <div className="mt-10 flex justify-center">
            <button className="rounded-sm bg-gradient-to-br from-primary to-primaryContainer px-12 py-4 text-[10px] uppercase tracking-[0.35em] text-black transition hover:scale-[1.02]">
              Request Private Session
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:grid lg:grid-cols-[1fr_1.5fr] lg:items-start lg:gap-16">
        <div>
          <h2 className="text-xl font-serif text-onSurface">The Atelier</h2>
          <address className="mt-6 not-italic space-y-4 text-sm leading-relaxed text-stone-400">
            <p>14 Savile Row<br />Mayfair, London<br />W1S 3JN, United Kingdom</p>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-primary">Hours</p>
              <p>Mon — Sat: 10:00 — 18:00</p>
              <p>Sunday: By Appointment Only</p>
            </div>
          </address>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-sm bg-surfaceContainerHigh">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT17A0_NqTZe0TpTQjs2r2K07-h25yteoSh21vqA4s-FgkbaxN5mIqRHmtBkfxlWR5zP0pLz7zYyVSQJR9zzu6Xk9j0vedjC-3FAro0NsOlMGYJVmB_BPX-mg090lxabQFEJna2PBwt5FvbNVfUATdFYDlv-qA2_2G7aPYxCi9lnfPrcHsC6_2CHl7sFdRuaJwd2es51yYDIcFmdc2H_QR0lysnp970I4H8DiO1U9NqoGRP14mYthZv8H0ipEHV5syj3MCRxxX9Rw"
            alt="Map location London"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full bg-primary animate-ping" />
            <div className="relative h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_#e9c176]" />
          </div>
        </div>
      </section>
    </main>
  );
}

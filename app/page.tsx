import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function HomePage() {
  return (
    <main className="pt-24">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyqPGTgFMb7_hdEH7CLLUvTJ00PMIt3aMfl-_ThnZQ68Wqy5HL9rd48xqJO529HkePb_yG66v3eaGCcQUjWeNeNs0dyTaCEUcKPHiUYkWqWaWfTEuaGdmr040E3tHU0pVtEeHa3c0_TpSw7t7qNy6PUe-rdeOAJAkr_rPvPMtJhKuPbap5S2vv72JoIPhzLH3qCT_JsM86-P8HPo7BfsHBNDNp6wtCDMFbvUIpoSTuDaNikhgMMwEYBzgoWXLr8fHXgJL9z2t_VNM"
            alt="Cinematic background of shoemaking"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-onSurface">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-serif leading-tight tracking-tight text-onSurface sm:text-6xl md:text-7xl">
              The Art of the <span className="italic font-light">Bespoke Step</span>
            </h1>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/shop" className="rounded-sm bg-gradient-to-br from-primary to-primaryContainer px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-black transition duration-500 hover:scale-[1.03]">
                Shop Collection
              </Link>
              <Link href="/contact" className="rounded-sm border border-[#4e4639]/30 px-8 py-4 text-[10px] uppercase tracking-[0.3em] transition duration-500 hover:bg-white/5 hover:scale-[1.02]">
                Design Your Pair
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Curated Selections</p>
            <h2 className="mt-4 text-4xl font-serif text-onSurface">Seasonal Editions</h2>
          </div>
          <Link href="/shop" className="text-[10px] uppercase tracking-[0.3em] text-primary border-b border-primary/30 pb-1 transition hover:border-primary">
            View All
          </Link>
        </div>

        <div className="mt-16 grid gap-12 xl:grid-cols-[7fr_5fr]">
          <div className="group overflow-hidden rounded-sm bg-surfaceContainerLow">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3zyq_u43U9lcfylJHZyUKI_zOeeJXyHsElCl5HwyOM5G5trZTmup6xCmtBnCadTyZV6MDu-58n2d02NBrXzlZ3tmOwGrnxBKisPiEDHM5lVTVrO138oRcUrKuaxTZbxlCCigqaYetsDSCVU3s1v_xa46jzKcD_5jGddzC6e-nVEGJX2SksLTGOaIgi25zWXF8MguzvOQxodG1aJc8-QC-OMON_wf8WZxI1TUB2vUH3YKgKnr0HBIN8jn3UGmtaq0YdGy3xvULqGo"
                alt="Luxury Leather Oxford"
                fill
                className="object-cover transition duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="p-8">
              <p className="text-3xl font-serif text-onSurface">The Obsidian Oxford</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-primary">Signature Collection</p>
            </div>
          </div>

          <div className="grid gap-12">
            <div className="group overflow-hidden rounded-sm bg-surfaceContainerLow">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYiT48XCRsHlGHQUcDUGaX8truhLoiTyI1r1gB7oTUGvONZcjvzBoAbQSHYigeFUD2G8XpsDHKAsUFy7Ljby8wzrO1gehSQcSbdTrMrokjaD2rebUfle2PgudPYPQTvmW3qideuE8N_Hu7a7OTTJIEDNPFM3jAXhuiug7K-QgoNgtDll2-G4m2LZb4wiYDh_fEFsNiVSZmYQzh_6fBH60uEb6oDIAS4QdofJqFIIqxPnT3W_QuWC0dAgDKnN4PGYGNTWqyS2O5PWo"
                  alt="Tan Leather Loafers"
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xl font-serif text-onSurface">Heritage Loafer</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-stone-500">$840.00</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-sm bg-surfaceContainerLow">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeOM--jp9Ix0_j0t3Vg3bcs2oC70sQlSLFlzwg09FpDmqLWcGVCnOt1plQwq1TszG3Fs8E4e0nW2Wa4i-YEGo0cFs3h4lG3zRDC9TXMsABlJzNssLgGSXUnoawHRddabhw54uCjUyqpPWfe0pKr-MmHOaHmwG8c4e2ksJw1bahlxgaSN_4GkAzxAnLCqWEFafEDsH8cdZZxX1399ncn_IcXk-c9P2ZLqrOUIpO4wFSbKx0x3JzovGZ-v_3vGkpf1yAZt6RK1_RJwI"
                  alt="Chelsea Boots"
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xl font-serif text-onSurface">The Midnight Chelsea</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-stone-500">$920.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-surfaceContainerLowest py-24 px-6 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-24 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -bottom-12 -right-12 hidden h-64 w-64 rounded-full border border-primary/20 md:block" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surfaceContainerLow">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GaCuKt3txq9jfGeMsOTdvSHxJ0N0vdPRVLro7hndynhaeR-_LZ5yjoYhlxd80IfqjuM0UahniXAczjTpCrFrDHBrvoINmvEQHUB1pO7DR2JuQjLwV6p7uagrGCdRIGkTnxHEKtHaVSss5oQfEIzFETEEJiTEUmoiUKx1627-GQWmXZwpUbKr-bSM3IXyQHUlhvaZ8fuQfMqh1KLeRcSkn6xwuVs95iYmeYU4Uww5H6Oe5hfKlS9pkUZXIKA9GzudFMU4U2Pak8"
                alt="Craftsmanship detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="space-y-8 text-stone-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary">The Atelier Philosophy</span>
            <h3 className="text-4xl font-serif leading-tight text-onSurface sm:text-5xl">Every stitch is a silent dialogue.</h3>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-stone-400">
              ADEN was founded on the belief that luxury is not loud. It is found in the weight of the last, the suppleness of the calfskin, and the patience of a master who has spent forty years perfecting a single welt.
            </p>
            <Link href="/about" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-onSurface transition hover:text-primary">
              Explore Our Craft
              <span className="block h-px w-16 bg-primary transition-all group-hover:w-20" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-onSurface">The Bespoke Journey</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-primary/30" />
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { step: '01', title: 'Choose', text: 'Select from our timeless silhouettes, each a masterclass in proportion and grace.' },
            { step: '02', title: 'Customize', text: 'Choose your leather, sole, and personal embossing. Every detail is yours to command.' },
            { step: '03', title: 'Order', text: 'Our artisans begin the 120-hour process of crafting your pair by hand.' },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center gap-6">
              <div className="text-7xl font-serif text-stone-700 opacity-30">{item.step}</div>
              <h4 className="text-xs uppercase tracking-[0.35em] text-primary">{item.title}</h4>
              <p className="max-w-sm text-stone-300 font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surfaceContainerLow py-24 px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center space-y-12">
          <svg viewBox="0 0 24 24" className="mx-auto h-10 w-10 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h4v4H5V9a2 2 0 0 1 2-2z" />
            <path d="M18 7h-4v4h6V9a2 2 0 0 0-2-2z" />
          </svg>
          <blockquote className="text-3xl font-serif italic leading-relaxed text-stone-200 sm:text-4xl">
            &quot;The fit is beyond anything off-the-shelf. ADEN doesn&apos;t just make shoes; they create a companion for the journey ahead.&quot;
          </blockquote>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Julian V. Rothschild</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">London, UK</p>
          </div>
        </div>
      </section>
    </main>
  );
}

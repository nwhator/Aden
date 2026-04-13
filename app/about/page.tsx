import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="pt-28 bg-surface text-onSurface">
      <section className="relative overflow-hidden px-6 py-24 md:px-12">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrxE6pUUy2AU1KOX9am5Mj3w2-XCJ7PX2GR0Ymrlo68YtdJ4wmP5CwGG4f_FUakfl49H63zxwPl5nxqArlPYnKAMS-SzCNVEtPPTpd1jscODd1_eoqlz6NfLhY7XCi72uy94pHmP2MaTdOw1vrsGgkeLtXE73cccj2z_KjHVh8i0vV-rptk_YBekDIJG7qU6wQ8Ib5HsnuqGQxbstDSPNbo8_YnQSvwrkbo_mu5swjyX5eE42DP2P0VK56DQa-kFFTC8Kl71v9IWQ"
            alt="The heritage of ADEN"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-surface" />
        </div>
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary">The Philosophy of Form</p>
          <h1 className="mt-6 text-5xl font-serif leading-tight sm:text-6xl">Where Time Becomes <span className="italic font-light">Material</span></h1>
          <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-stone-400">
            ADEN was founded on a singular premise: that the most personal object a person can own is the one that carries them through the world.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative">
            <div className="rounded-sm bg-surfaceContainerLow p-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0NR1eO1JygbXtgRVkEbU_J0aVBhNHPFWkXwMEoIlM5ULGc_K3nEwBmRW7XBxQm7MIJmJHA-f-YMlQhI0tfh65_aqxk72EhTP2WhkmvGP81utpO1P9TXtIxUcHF8yT6COztdq-uMykiOpvXxQBq2B9XBTipWx5w9wx7R-2GCYf-RkETdP6XSGSXKycINkzGYW6CSqleii1bGEyHkFqvqU-wfJAOBlH9TFRGWHpSO4XZ7IoXRdyXEw3ERVSvlJYzrVa_o1z4of92tQ"
                alt="Vintage atelier photography"
                width={900}
                height={1200}
                className="rounded-sm object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden rounded-sm bg-surfaceContainerHigh p-8 md:block">
              <p className="text-3xl font-serif italic">1924</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-primary">THE ORIGIN</p>
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl font-serif sm:text-5xl">The Heritage</h2>
            <div className="space-y-6 text-sm leading-relaxed text-stone-300">
              <p>
                Our story does not begin in a factory, but in the quiet of a cellar where the scent of oak-tanned leather and beeswax was the only currency. For three generations, ADEN has preserved the vanishing techniques of hand-welted construction.
              </p>
              <p>
                We do not measure our success in units, but in the decades a single pair remains in service. It is an inheritance of technique, a lineage of aesthetic restraint that refuses the lure of the ephemeral.
              </p>
            </div>
            <a className="relative inline-block text-[10px] uppercase tracking-[0.35em] text-primary" href="#">
              Explore the Archives
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surfaceContainerLowest px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl space-y-20 text-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-primary">A Temple of Silence and Steel</p>
            <h2 className="mt-4 text-4xl font-serif sm:text-5xl">The Workshop</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'The Precision',
                description: 'Each tool is an extension of the artisan’s hand, worn down over decades to fit the specific grip of its master.',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuAkUZSkSUs4y9r6pymNhp8_cUCSE2rObfDI4VC730NtCWsTeF7Dx6vQKBiXrk922uZDTju7aYtcILpbxUpeDw7i1lctmF1tPOU2hx77hzqi9sNf7fgSgyWDmGPz5uQrBWB46bnHk9Ev2920eRfkXqQx8GVQxJJ5DBDrbUO46RoWYfbbvMf_eAgwI1s_97jvzJtJwQE4NHoQgMq_BoR_Web-ZYXBpTAa50zRQo8W_MxrNbSKID5KADl_fPbv4bujKSiT6GiAXzom_aI',
              },
              {
                title: 'The Raw',
                description: 'We source exclusively from tanneries that still use vegetable barks, a process that takes months rather than days.',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCw5hdO40FeUB_3eWtsNi2M_xt9SX7uMRiRaBlWPK5OR4JUurQNu_R65HtK7v5TMXiCSlHIL1xRhTWZnqN3uWzstOb3taQC8vKbZtPjxTNuHFMpkSX_V7Oe05N2S9PlRwf25je-45e_w7mf61nPq3Sj5se8xJblmYG8jWZwN5bBUFWTgCpCylrURVofQx1qSIU45e8Yj1Su9DOA8ppR0ridCt5pYN27-XJ3qQWu2wxglGk-2ZdQEQ_7WilejAb2yb0Qu_XUsmpfNaA',
              },
              {
                title: 'The Finish',
                description: 'The final polish is applied by hand using a combination of friction and bone, creating a mirror shine that breathes.',
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCp-r7nwgjBO5jPbU4U1xL_Vk4-rPh2f4SFuhGFrdq2aZxyv_4n3zibPQRWAUZOIrBsGEVuq8s4yAl3jrXCKLlRYDuSGi4hc0mYFuHIBLf51ecV1f0O6yfV9XY5ANNUrQuu-NdJkBsa8GdIRui71DjqNZItvK2s9h6eBUY6C_5QE7O3UYjMq_bVLUKjo2a6pNdGmx6hlydPX-J-Yym1kfQ5saPVFAhlwHwEb57r0htZJBebw9pswaWT4FRkAqQe7gfG3QRCjd6cQ7o',
              },
            ].map((card) => (
              <div key={card.title} className="space-y-6 rounded-sm bg-surfaceContainerLow p-6">
                <div className="overflow-hidden rounded-sm">
                  <Image src={card.image} alt={card.title} width={540} height={540} className="h-full w-full object-cover transition duration-1000 hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-onSurface">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="order-2 lg:order-1">
            <span className="material-symbols-outlined text-primary text-5xl">format_quote</span>
            <blockquote className="mt-8 text-3xl font-serif italic leading-tight text-onSurface sm:text-4xl">
              &quot;In a world of mass-produced noise, a bespoke shoe is a quiet conversation between the maker and the wearer. We don&apos;t just build footwear; we map a life.&quot;
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-primary" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-onSurface">Elias Aden</p>
                <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">Master Cordwainer</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-sm overflow-hidden bg-surfaceContainerLow">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0uLrgTUb1kzBhltBjkX9xvzcBTYdZA7hTjtsILWFda5_FX9NctTy07pCNQkQYN6quY0xThaRS_5t5V-1CmFHTuqmY3qk5d087yScX0n3W5wvqJ6FmV0dXvwKfWCiVHuR0FsscEdtu4BdBNWjlufvOZOkPbvAFfmS0Z-QJb9yRvP7JkJLMUJCDud_KliPPM2KaABySWAHpbrjwthAqjvjNZiqYwcrO0br9GfUgCJSuMf8byBdcQrXQI7VSCrGYpY-0goU3kdnkRWE"
              alt="Portrait of artisan"
              width={900}
              height={1125}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surfaceContainerLow px-6 py-24 text-center md:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-serif sm:text-4xl">The journey begins with a single measurement.</h2>
          <button className="mt-12 rounded-sm bg-gradient-to-br from-primary to-primaryContainer px-12 py-5 text-[11px] uppercase tracking-[0.35em] text-black transition hover:scale-[1.02]">
            Book An Appointment
          </button>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { CalendarBlank, ForkKnife, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { PlaceholderArt } from "@/components/placeholder-art";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { HeadingReveal } from "@/components/motion/heading-reveal";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";
import { amenities, signatureDishes, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92dvh] items-end overflow-hidden bg-primary text-on-primary">
        <ParallaxLayer speed={14} className="absolute inset-0 -top-16 h-[calc(100%+8rem)]">
          <PlaceholderArt variant="hero" dark className="h-full w-full" />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/10" />

        <div className="container-page relative z-10 pb-16 pt-40 sm:pb-24">
          <p className="mb-4 text-sm tracking-[0.25em] text-accent uppercase">
            Menteng · Central Jakarta
          </p>
          <HeadingReveal
            text="Modern Indonesian, for slow evenings."
            className="max-w-3xl text-balance text-5xl leading-[1.05] font-medium sm:text-6xl md:text-7xl"
          />
          <Reveal delay={0.5}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-primary/75">
              {siteConfig.description}
            </p>
          </Reveal>
          <Reveal delay={0.65}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/reservations"
                className="inline-flex h-13 items-center gap-2 rounded-full bg-accent px-7 text-sm tracking-wide text-on-accent uppercase transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <CalendarBlank size={18} />
                Reserve a Table
              </Link>
              <Link
                href="/menu"
                className="inline-flex h-13 items-center gap-2 rounded-full border border-on-primary/40 px-7 text-sm tracking-wide text-on-primary uppercase transition-colors duration-200 hover:border-on-primary hover:bg-on-primary/10"
              >
                <ForkKnife size={18} />
                View Menu
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-on-primary/60 motion-safe:animate-bounce">
          <ArrowDown size={20} aria-hidden />
          <span className="sr-only">Scroll to explore</span>
        </div>
      </section>

      {/* Intro / story teaser */}
      <section className="py-14 sm:py-24">
        <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <PlaceholderArt
              variant="portrait"
              className="aspect-[4/5] w-full rounded-2xl"
              caption="Interior of the Cendana dining room in Menteng"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm tracking-[0.25em] text-accent uppercase">Our Story</p>
            <h2 className="mt-4 text-balance text-3xl leading-tight sm:text-4xl">
              A 1970s Menteng townhouse, reimagined around one open kitchen.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Cendana draws its name from the sandalwood-lined streets of old
              Menteng — a menu built from the archipelago&rsquo;s pantry,
              reworked with restraint rather than spectacle. Forty-eight
              seats, one seasonal table, and a kitchen you can watch work.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-primary uppercase underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Read our story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <p className="text-sm tracking-[0.25em] text-accent uppercase">
              From the Kitchen
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-3xl leading-tight sm:text-4xl">
              A few dishes worth crossing the city for.
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {signatureDishes.map((dish) => (
              <StaggerItem key={dish.name}>
                <article className="group h-full overflow-hidden rounded-2xl bg-surface shadow-[0_1px_0_0_var(--color-border)] transition-shadow duration-300 hover:shadow-lg">
                  <PlaceholderArt
                    variant="plate"
                    className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-xl">{dish.name}</h3>
                      <span className="shrink-0 text-sm text-accent">{dish.price}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {dish.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-12 text-center">
              <Link
                href="/menu"
                className="inline-flex h-12 items-center rounded-full border border-primary px-7 text-sm tracking-wide text-primary uppercase transition-colors hover:bg-primary hover:text-on-primary"
              >
                See the full menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Amenities showcase */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <p className="text-sm tracking-[0.25em] text-accent uppercase">
              The Space
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-3xl leading-tight sm:text-4xl">
              Three rooms, one rhythm.
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col gap-16">
            {amenities.map((item, i) => (
              <Reveal key={item.title}>
                <div
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <PlaceholderArt
                    variant={item.variant}
                    className="aspect-[16/11] w-full rounded-2xl"
                  />
                  <div>
                    <h3 className="text-2xl sm:text-3xl">{item.title}</h3>
                    <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial band */}
      <section className="bg-primary py-20 text-on-primary sm:py-28">
        <div className="container-page grid gap-10 sm:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <blockquote className="border-l border-accent/60 pl-6">
                <p className="text-balance font-[family-name:var(--font-display)] text-2xl leading-snug italic sm:text-3xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm tracking-wide text-on-primary/60 uppercase">
                  {t.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 sm:py-28">
        <div className="container-page text-center">
          <Reveal>
            <h2 className="text-balance text-3xl sm:text-4xl">
              The table is set. Join us.
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
              Reservations open 30 days in advance. Private dining and group
              bookings welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/reservations"
                className="inline-flex h-13 items-center rounded-full bg-primary px-8 text-sm tracking-wide text-on-primary uppercase transition-transform duration-200 hover:scale-[1.03]"
              >
                Reserve a Table
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-13 items-center rounded-full border border-primary px-8 text-sm tracking-wide text-primary uppercase transition-colors duration-200 hover:bg-primary hover:text-on-primary"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderArt } from "@/components/placeholder-art";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { HeadingReveal } from "@/components/motion/heading-reveal";
import { storyMilestones } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind Cendana — modern Indonesian fine dining in a restored Menteng townhouse, Central Jakarta.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[46dvh] items-end overflow-hidden bg-primary text-on-primary">
        <PlaceholderArt variant="interior" dark className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10" />
        <div className="container-page relative z-10 pb-16 pt-32">
          <p className="text-sm tracking-[0.25em] text-accent uppercase">Our Story</p>
          <HeadingReveal
            text="Built around one kitchen."
            className="mt-4 text-5xl sm:text-6xl"
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-balance text-2xl leading-snug sm:text-3xl">
              Cendana takes its name from the sandalwood-lined streets of
              old Menteng — and its philosophy from a simple belief.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-muted-foreground">
              Indonesian food doesn&rsquo;t need to be simplified for a
              fine dining room — it needs a kitchen willing to take it
              seriously. We work with fishmongers in Muara Angke,
              spice traders in Tanah Abang, and small producers across
              Sumatra and Sulawesi to build a menu that changes with what
              the archipelago actually has to offer that week.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The room seats forty-eight around a single open kitchen, in a
              restored 1970s townhouse we stripped back to its original
              timber and brass. Nothing about the space is meant to
              compete with the plate in front of you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <div className="container-page">
          <Reveal>
            <p className="text-sm tracking-[0.25em] text-accent uppercase">Timeline</p>
            <h2 className="mt-4 max-w-lg text-balance text-3xl sm:text-4xl">
              How the table came together.
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-10 sm:grid-cols-3">
            {storyMilestones.map((m) => (
              <StaggerItem key={m.year}>
                <div className="border-t-2 border-accent pt-5">
                  <p className="font-[family-name:var(--font-display-sc)] text-lg text-accent">
                    {m.year}
                  </p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <PlaceholderArt
              variant="portrait"
              caption="Head chef at Cendana in the open kitchen"
              className="aspect-[4/5] w-full rounded-2xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm tracking-[0.25em] text-accent uppercase">
              The Kitchen
            </p>
            <h2 className="mt-4 text-balance text-3xl leading-tight sm:text-4xl">
              Trained abroad, cooking for home.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Our kitchen team spent a decade between European fine dining
              rooms before returning to Jakarta to build something that
              felt more like theirs. Every dish on the menu is developed
              from a family recipe, a regional technique, or a market
              conversation — never from a trend.
            </p>
            <Link
              href="/reservations"
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-primary uppercase underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Reserve your table
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

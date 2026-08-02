import type { Metadata } from "next";
import { PlaceholderArt } from "@/components/placeholder-art";
import { Reveal } from "@/components/motion/reveal";
import { HeadingReveal } from "@/components/motion/heading-reveal";
import { menu } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Seasonal Indonesian tasting menu, small plates, and cocktails at Cendana, Menteng, Central Jakarta.",
};

const sections: { key: keyof typeof menu; label: string; note?: string }[] = [
  { key: "starters", label: "Starters" },
  { key: "mains", label: "Mains" },
  { key: "desserts", label: "Desserts" },
  { key: "drinks", label: "Coffee & Cocktails" },
];

export default function MenuPage() {
  return (
    <>
      <section className="relative flex min-h-[46dvh] items-end overflow-hidden bg-primary text-on-primary">
        <PlaceholderArt variant="texture" dark className="absolute inset-0 h-full w-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10" />
        <div className="container-page relative z-10 pb-16 pt-32">
          <p className="text-sm tracking-[0.25em] text-accent uppercase">Menu</p>
          <HeadingReveal
            text="A seasonal table."
            className="mt-4 text-5xl sm:text-6xl"
          />
          <p className="mt-4 max-w-lg text-on-primary/75">
            Sourced daily and revised by season. A 10% service charge and
            applicable government tax apply to all prices.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-16">
            {sections.map((section) => (
              <Reveal key={section.key}>
                <div>
                  <h2 className="font-[family-name:var(--font-display-sc)] text-2xl tracking-wide text-accent">
                    {section.label}
                  </h2>
                  <ul className="mt-6 flex flex-col gap-6">
                    {menu[section.key].map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline gap-3">
                          <span className="text-lg">{item.name}</span>
                          <span
                            className="h-px flex-1 border-b border-dotted border-border"
                            aria-hidden
                          />
                          <span className="shrink-0 text-sm tabular-nums text-accent">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <PlaceholderArt
                variant="plate"
                caption="A signature dish at Cendana"
                className="aspect-square w-full rounded-2xl"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-muted p-6">
                <h3 className="text-lg">Tasting Menu</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Prefer to let the kitchen lead? Our 6-course tasting menu
                  (Rp 685,000 per person, optional wine pairing +Rp 385,000)
                  is available for the full table with 24 hours&rsquo; notice.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border p-6">
                <h3 className="text-lg">Dietary Notes</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Vegetarian and pescatarian adaptations available on
                  request. Please note allergies when reserving — our
                  kitchen handles peanut, shellfish, and gluten.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

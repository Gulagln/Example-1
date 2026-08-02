import type { Metadata } from "next";
import { MapPin, Phone, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { PlaceholderArt } from "@/components/placeholder-art";
import { Reveal } from "@/components/motion/reveal";
import { HeadingReveal } from "@/components/motion/heading-reveal";
import { ReservationForm } from "@/components/reservation-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Request a table at Cendana, Menteng — modern Indonesian fine dining in Central Jakarta.",
};

export default function ReservationsPage() {
  return (
    <>
      <section className="relative flex min-h-[38dvh] items-end overflow-hidden bg-primary text-on-primary">
        <PlaceholderArt variant="interior" dark className="absolute inset-0 h-full w-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10" />
        <div className="container-page relative z-10 pb-16 pt-32">
          <p className="text-sm tracking-[0.25em] text-accent uppercase">Reservations</p>
          <HeadingReveal text="Reserve your table." className="mt-4 text-5xl sm:text-6xl" />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <ReservationForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-8">
              <PlaceholderArt
                variant="interior"
                caption="Map to Cendana's location in Menteng"
                className="aspect-[4/3] w-full rounded-2xl"
              />

              <div>
                <h2 className="text-sm tracking-[0.25em] text-accent uppercase">
                  Visit
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-sm">
                  <p className="flex gap-3">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      {siteConfig.address.street}, {siteConfig.address.area}
                      <br />
                      {siteConfig.address.city}
                    </span>
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 transition-colors hover:text-accent"
                  >
                    <Phone size={20} className="shrink-0 text-accent" />
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 transition-colors hover:text-accent"
                  >
                    <WhatsappLogo size={20} className="shrink-0 text-accent" />
                    WhatsApp {siteConfig.contact.whatsapp}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 transition-colors hover:text-accent"
                  >
                    <EnvelopeSimple size={20} className="shrink-0 text-accent" />
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-sm tracking-[0.25em] text-accent uppercase">
                  Hours
                </h2>
                <ul className="mt-4 flex flex-col gap-2 text-sm">
                  {siteConfig.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4">
                      <span>{h.days}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-muted p-6 text-sm leading-relaxed text-muted-foreground">
                Parties of 9 or more, and private dining bookings, are
                arranged directly with our events team — call or WhatsApp
                and we&rsquo;ll take care of the rest.
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

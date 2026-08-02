import Link from "next/link";
import {
  InstagramLogo,
  MapPin,
  Phone,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-on-primary">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-[family-name:var(--font-display-sc)] text-2xl tracking-wide">
            {siteConfig.name}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-primary/70">
            {siteConfig.tagline} in the heart of Menteng, Central Jakarta.
            An intimate room, a seasonal table, and evenings built to
            unfold slowly.
          </p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${siteConfig.name} on Instagram`}
            className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-on-primary/25 text-on-primary transition-colors hover:border-accent hover:text-accent"
          >
            <InstagramLogo size={20} />
          </a>
        </div>

        <div>
          <p className="text-sm tracking-widest text-on-primary/50 uppercase">
            Visit
          </p>
          <address className="mt-4 flex flex-col gap-3 text-sm not-italic text-on-primary/80">
            <span className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              {siteConfig.address.street}, {siteConfig.address.area}
              <br />
              {siteConfig.address.city}
            </span>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 transition-colors hover:text-accent"
            >
              <Phone size={18} className="shrink-0 text-accent" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 transition-colors hover:text-accent"
            >
              <EnvelopeSimple size={18} className="shrink-0 text-accent" />
              {siteConfig.contact.email}
            </a>
          </address>
        </div>

        <div>
          <p className="text-sm tracking-widest text-on-primary/50 uppercase">
            Hours
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-on-primary/80">
            {siteConfig.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-on-primary/60">{h.time}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/reservations"
            className="mt-6 inline-block rounded-full border border-accent px-5 py-2 text-sm tracking-wide text-accent uppercase transition-colors hover:bg-accent hover:text-on-accent"
          >
            Reserve a Table
          </Link>
        </div>
      </div>

      <div className="border-t border-on-primary/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-on-primary/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. All
            rights reserved.
          </p>
          <p>Jakarta Pusat, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

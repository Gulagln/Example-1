"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-18 items-center justify-between py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display-sc)] text-2xl tracking-wide text-primary transition-opacity hover:opacity-70"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-9" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-sm tracking-wide uppercase transition-colors hover:text-accent",
                  active ? "text-accent" : "text-foreground/80"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/reservations"
          className="hidden rounded-full border border-primary px-5 py-2 text-sm tracking-wide uppercase text-primary transition-colors hover:bg-primary hover:text-on-primary md:inline-block"
        >
          Reserve
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full text-primary md:hidden"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden border-t border-border/80 bg-background transition-[grid-template-rows] duration-300 ease-out md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base tracking-wide uppercase transition-colors",
                    active ? "bg-muted text-accent" : "text-foreground/85 active:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/reservations"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm tracking-wide uppercase text-on-primary"
            >
              Reserve a Table
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

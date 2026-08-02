import type { Metadata } from "next";
import { PlaceholderArt } from "@/components/placeholder-art";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { HeadingReveal } from "@/components/motion/heading-reveal";
import { galleryItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Cendana's dining room, private dining, bar, and kitchen in Menteng, Central Jakarta.",
};

const sizeClasses: Record<(typeof galleryItems)[number]["size"], string> = {
  large: "sm:col-span-2 aspect-[16/11]",
  medium: "sm:col-span-2 aspect-[16/10]",
  small: "aspect-square",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative flex min-h-[40dvh] items-end overflow-hidden bg-primary text-on-primary">
        <PlaceholderArt variant="plate" dark className="absolute inset-0 h-full w-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10" />
        <div className="container-page relative z-10 pb-16 pt-32">
          <p className="text-sm tracking-[0.25em] text-accent uppercase">Gallery</p>
          <HeadingReveal text="Inside Cendana." className="mt-4 text-5xl sm:text-6xl" />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              Photography for the dining room, kitchen, and private spaces
              is in production — the compositions below hold each
              image&rsquo;s place until then.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {galleryItems.map((item) => (
              <StaggerItem key={item.title}>
                <figure
                  className={cn(
                    "group relative overflow-hidden rounded-xl",
                    sizeClasses[item.size]
                  )}
                >
                  <PlaceholderArt
                    variant={item.variant}
                    className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.title}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

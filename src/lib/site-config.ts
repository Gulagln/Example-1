export const siteConfig = {
  name: "Cendana",
  fullName: "Cendana Jakarta",
  tagline: "Modern Indonesian Fine Dining",
  description:
    "Cendana is a modern Indonesian fine dining restaurant in the heart of Menteng, Central Jakarta — refined archipelago flavors, seasonal tasting menus, and an intimate dining room built for slow evenings.",
  url: "https://cendana.example.com",
  address: {
    street: "Jl. Cendana No. 8",
    area: "Menteng",
    city: "Jakarta Pusat 10310",
    country: "Indonesia",
  },
  contact: {
    phone: "+62 21 3190 8842",
    whatsapp: "+62 811 8842 001",
    email: "reservations@cendana.id",
  },
  hours: [
    { days: "Tuesday – Friday", time: "17.00 – 23.00" },
    { days: "Saturday – Sunday", time: "12.00 – 15.00, 17.00 – 23.30" },
    { days: "Monday", time: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com/cendana.jakarta",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reservations", href: "/reservations" },
  ],
} as const;

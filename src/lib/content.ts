export const signatureDishes = [
  {
    name: "Bakar Cendana",
    description:
      "Charcoal-grilled Sumatran short rib, sandalwood smoke, kecap manis reduction, pickled shallot.",
    price: "Rp 285,000",
  },
  {
    name: "Karang & Laut",
    description:
      "Line-caught kerapu, coconut-turmeric broth, coastal greens, calamansi oil.",
    price: "Rp 245,000",
  },
  {
    name: "Rempah Duck",
    description:
      "Slow-confit duck leg, seven-spice rempah crust, sambal matah, roasted shallot jus.",
    price: "Rp 265,000",
  },
] as const;

export const amenities = [
  {
    title: "Main Dining Room",
    description:
      "48 seats beneath brass pendant light, warm timber, and a slow-moving view of the open kitchen.",
    variant: "interior",
  },
  {
    title: "Private Dining",
    description:
      "An intimate room for up to 12 guests — tailored tasting menus for anniversaries, board dinners, and celebrations.",
    variant: "portrait",
  },
  {
    title: "Bar & Lounge",
    description:
      "Archipelago-inspired cocktails and a curated natural wine list, open for walk-ins from 17.00.",
    variant: "plate",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Every course felt considered — like the menu was written for Jakarta, not translated for it.",
    name: "Jakarta Weekend Review",
  },
  {
    quote:
      "The kind of quiet, confident room you bring people you actually want to impress.",
    name: "Table Talk Journal",
  },
] as const;

export const menu = {
  starters: [
    {
      name: "Rujak Nanas Panggang",
      description: "Charred pineapple, palm sugar-tamarind dressing, roasted peanut, chili",
      price: "Rp 95,000",
    },
    {
      name: "Sup Buntut Consommé",
      description: "Clarified oxtail broth, star anise, crisp shallot, spring onion oil",
      price: "Rp 110,000",
    },
    {
      name: "Tuna Kerabu",
      description: "Yellowfin tartare, kaffir lime, torch ginger flower, betel leaf",
      price: "Rp 135,000",
    },
    {
      name: "Perkedel Jagung",
      description: "Sweet corn fritter, coconut sambal, lime crème fraîche",
      price: "Rp 85,000",
    },
  ],
  mains: [
    {
      name: "Bakar Cendana",
      description: "Charcoal-grilled Sumatran short rib, sandalwood smoke, kecap manis reduction",
      price: "Rp 285,000",
    },
    {
      name: "Karang & Laut",
      description: "Line-caught kerapu, coconut-turmeric broth, coastal greens, calamansi oil",
      price: "Rp 245,000",
    },
    {
      name: "Rempah Duck",
      description: "Slow-confit duck leg, seven-spice rempah crust, sambal matah",
      price: "Rp 265,000",
    },
    {
      name: "Rendang Wagyu",
      description: "36-hour braised wagyu short rib, toasted coconut, lengkuas jus",
      price: "Rp 320,000",
    },
    {
      name: "Nasi Cendana",
      description: "Turmeric rice, salted egg, ikan asin, sambal trio (for the table)",
      price: "Rp 65,000",
    },
  ],
  desserts: [
    {
      name: "Klepon Deconstructed",
      description: "Pandan sponge, gula melaka core, fresh coconut sorbet",
      price: "Rp 95,000",
    },
    {
      name: "Es Teler Granita",
      description: "Tropical fruit granita, coconut cream, jackfruit, avocado",
      price: "Rp 85,000",
    },
    {
      name: "Dark Chocolate & Tempe",
      description: "Valrhona ganache, caramelized tempeh crumble, sea salt",
      price: "Rp 105,000",
    },
  ],
  drinks: [
    {
      name: "Kopi Cendana",
      description: "House cold brew, gula aren, cardamom foam",
      price: "Rp 65,000",
    },
    {
      name: "Rempah Old Fashioned",
      description: "Bourbon, clove-cinnamon syrup, orange bitters",
      price: "Rp 145,000",
    },
    {
      name: "Kembang Sepatu",
      description: "Hibiscus, calamansi, soda, fresh mint",
      price: "Rp 65,000",
    },
  ],
} as const;

export const galleryItems = [
  { title: "The Dining Room", variant: "interior", size: "large" },
  { title: "Bakar Cendana", variant: "plate", size: "small" },
  { title: "Private Dining Room", variant: "portrait", size: "small" },
  { title: "Bar & Lounge", variant: "interior", size: "medium" },
  { title: "Rempah Duck", variant: "plate", size: "small" },
  { title: "Open Kitchen", variant: "texture", size: "medium" },
  { title: "Evening Terrace", variant: "hero", size: "large" },
  { title: "Kopi Cendana", variant: "plate", size: "small" },
] as const;

export const storyMilestones = [
  {
    year: "The Idea",
    text: "Cendana began as a question: what does modern Indonesian fine dining look like when it stops explaining itself to outsiders?",
  },
  {
    year: "The Room",
    text: "A 1970s Menteng townhouse, stripped back to timber and brass, built around a single open kitchen.",
  },
  {
    year: "The Table",
    text: "A seasonal menu drawn from Sumatra to the Moluccas — reworked, not diluted, for a slow evening in Central Jakarta.",
  },
] as const;

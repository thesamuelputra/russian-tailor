/**
 * Canonical business facts for The Russian Tailor.
 * Sourced from russiantailor.ca and cross-checked against the shop's public
 * listings (postal code and hours verified via Yelp, June 2026). See CONTENT.md.
 */
export const site = {
  name: "The Russian Tailor",
  tagline: "Custom Tailoring · Expert Alterations",
  owner: "Irina Sitonin",
  phone: "250-388-5543",
  phoneHref: "tel:+12503885543",
  email: "russiantailor@gmail.com",
  address: {
    street: "#203 – 612 View Street",
    city: "Victoria",
    region: "BC",
    postal: "V8W 1J5",
    country: "Canada",
  },
  corner: "at the corner of View and Government Street",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("The Russian Tailor, 612 View Street, Victoria BC V8W 1J5"),
  facebook: "https://www.facebook.com/p/The-Russian-Tailor-100063538961330/",
  hours: [
    { day: "Monday", time: "10:00 – 5:30" },
    { day: "Tuesday", time: "10:00 – 5:30" },
    { day: "Wednesday", time: "Closed" },
    { day: "Thursday", time: "10:00 – 5:30" },
    { day: "Friday", time: "10:00 – 5:30" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
  hoursSummary: "Mon · Tue · Thu · Fri, 10:00 – 5:30",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/custom-tailoring", label: "Custom Tailoring" },
  { href: "/clothing-repair-and-alteration", label: "Repairs & Alterations" },
  { href: "/photos", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

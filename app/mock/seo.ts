const siteUrl = "https://yourdomain.com";
const siteName = "Bonny Moon Booking";
const description =
  "Book your perfect beach experience, restaurant reservation, or private event at Bonny Moon. Reserve beach day beds, lounge chairs, or tables for dining right on the beach.";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
];

export const seoHeadConfig = {
  htmlAttrs: {
    lang: "en",
  },
  title: `${siteName} - Beach Club Booking & Reservations`,
  meta: [
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "beach club, restaurant reservation, beach experience, private events, beach day bed, lounge chair, beach dining",
    },
    { name: "author", content: siteName },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteUrl },
    {
      property: "og:title",
      content: `${siteName} - Beach Club Booking & Reservations`,
    },
    { property: "og:description", content: description },
    { property: "og:site_name", content: siteName },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: `${siteName} - Beach Club Booking & Reservations`,
    },
    { name: "twitter:description", content: description },
    { name: "theme-color", content: "#F26E21" },
    { name: "format-detection", content: "telephone=no" },
  ],
  link: [
    { rel: "canonical", href: siteUrl },
    { rel: "alternate", hreflang: "en", href: siteUrl },
  ],
  script: structuredData.map((data) => ({
    type: "application/ld+json",
    innerHTML: JSON.stringify(data),
  })),
};

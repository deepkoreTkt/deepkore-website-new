export const generateJsonLd = (data: Record<string, unknown>) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Deepkore ",
    description: "-  Building the Future of AI Driven Business",
    url: "https://deepkore.com",
    ...data,
  };
};

export const generateJsonLd = (data: Record<string, unknown>) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Deepkore",
    description: "AI-powered creative entrepreneurship platform",
    url: "https://your-domain.com",
    ...data,
  };
};

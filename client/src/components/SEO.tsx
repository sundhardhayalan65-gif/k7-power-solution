import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  breadcrumbs?: { name: string; url: string }[];
}

export default function SEO({ title, description, keywords, canonical, breadcrumbs }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/update a meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]',       "content", description);
    setMeta('meta[property="og:title"]',       "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]',      "content", title);
    setMeta('meta[name="twitter:description"]',"content", description);

    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    }

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // JSON-LD breadcrumbs
    if (breadcrumbs) {
      const existing = document.getElementById("page-breadcrumbs");
      if (existing) existing.remove();

      const script = document.createElement("script");
      script.id = "page-breadcrumbs";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": crumb.name,
          "item": crumb.url,
        })),
      });
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, breadcrumbs]);

  return null;
}

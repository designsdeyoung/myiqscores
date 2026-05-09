import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://www.myiqscores.com";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/WYMU4VtnINe1xcVzzfyuW3Rd4m22/social-images/social-1774334778648-ChatGPT_Image_Mar_24,_2026,_02_46_00_AM.webp";

const labelFromSlug = (slug: string) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/\bIq\b/g, "IQ")
    .replace(/\bEq\b/g, "EQ")
    .replace(/\bUs\b/g, "US")
    .replace(/\bSat\b/g, "SAT")
    .replace(/\bAct\b/g, "ACT")
    .replace(/\bGre\b/g, "GRE")
    .replace(/\bAsvab\b/g, "ASVAB");

const SEOHead = ({
  title = "Free IQ Test — Get Your Score Instantly | MyIQScores",
  description = "Take a free online IQ-style reasoning test. 30 questions, instant educational results, score ranges, and cognitive learning guides. No sign-up or paywall.",
  canonicalUrl = SITE_URL,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd,
}: SEOHeadProps) => {
  const fullCanonicalUrl = canonicalUrl.startsWith("http")
    ? canonicalUrl
    : `${SITE_URL}${canonicalUrl}`;
  const canonicalPath = new URL(fullCanonicalUrl).pathname;
  const pathParts = canonicalPath.split("/").filter(Boolean);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "MyIQScores",
    url: SITE_URL,
    email: "support@myiqscores.com",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.svg`,
      width: 512,
      height: 512,
    },
    sameAs: [
      "https://x.com/MyIQScores",
      "https://www.reddit.com/r/MyIQScores/",
    ],
    description:
      "Free online IQ-style reasoning test with educational score explanations, cognitive testing guides, and score interpretation resources.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@myiqscores.com",
        url: `${SITE_URL}/contact`,
      },
      {
        "@type": "ContactPoint",
        contactType: "editorial corrections",
        email: "content@myiqscores.com",
        url: `${SITE_URL}/editorial-policy`,
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "MyIQScores",
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };

  const breadcrumbSchema =
    pathParts.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            ...pathParts.map((part, index) => {
              const itemPath = `/${pathParts.slice(0, index + 1).join("/")}`;
              return {
                "@type": "ListItem",
                position: index + 2,
                name: labelFromSlug(part),
                item: `${SITE_URL}${itemPath}`,
              };
            }),
          ],
        }
      : null;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": ogType === "article" ? "Article" : "WebPage",
    "@id": `${fullCanonicalUrl}#webpage`,
    url: fullCanonicalUrl,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: ogImage,
    inLanguage: "en-US",
  };

  const pageJsonLd = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const structuredData = [
    organizationSchema,
    websiteSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    pageSchema,
    ...pageJsonLd,
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
      />
      <link rel="canonical" href={fullCanonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="MyIQScores" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@MyIQScores" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;

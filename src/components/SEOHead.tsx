import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const SITE_URL = "https://myiqscores.com";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/WYMU4VtnINe1xcVzzfyuW3Rd4m22/social-images/social-1774334778648-ChatGPT_Image_Mar_24,_2026,_02_46_00_AM.webp";

const SEOHead = ({
  title = "Free IQ Test — Get Your Score Instantly | MyIQScores",
  description = "Take the most accurate free IQ test online. 30 questions, 15 minutes, instant results. No sign-up, no paywall. Discover your cognitive edge.",
  canonicalUrl = SITE_URL,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  twitterCard = "summary_large_image",
}: SEOHeadProps) => {
  const fullCanonicalUrl = canonicalUrl.startsWith("http")
    ? canonicalUrl
    : `${SITE_URL}${canonicalUrl}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@MyIQScores" />
    </Helmet>
  );
};

export default SEOHead;

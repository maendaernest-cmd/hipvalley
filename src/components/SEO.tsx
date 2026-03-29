import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Hipvalley - Custom Home Building in Harare, Zimbabwe',
  description = 'Hipvalley is your trusted residential construction company in Harare, specializing in custom home building, home renovations, and extensions. 8+ years building beautiful family homes.',
  keywords = 'custom home builder Harare, residential construction Zimbabwe, home renovations Harare, house extensions, luxury homes, family homes, building contractor, Hipvalley construction',
  image = '/images/hipavalley-logo.jpg',
  url = window.location.href,
  type = 'website'
}) => {
  const location = useLocation();
  const currentUrl = url || `https://hipvalley.co.zw${location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://hipvalley.co.zw${image}`} />
      <meta property="og:site_name" content="Hipvalley" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://hipvalley.co.zw${image}`} />

      {/* Local Business SEO */}
      <meta name="geo.region" content="ZW-HA" />
      <meta name="geo.placename" content="Harare, Zimbabwe" />
      <meta name="geo.position" content="-17.8292;31.0539" />
      <meta name="ICBM" content="-17.8292,31.0539" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Kuwadzana Extension, Harare, Zimbabwe" />
      <meta name="business:contact_data:locality" content="Harare" />
      <meta name="business:contact_data:country" content="Zimbabwe" />
      <meta name="business:contact_data:phone_number" content="+263 773063103" />
      <meta name="business:contact_data:email" content="hipvalley@gmail.com" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Joseph Chamakandiona" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Hipvalley",
          "description": description,
          "url": "https://hipvalley.co.zw",
          "telephone": "+263 773063103",
          "email": "hipvalley@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kuwadzana Extension",
            "addressLocality": "Harare",
            "addressCountry": "Zimbabwe"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-17.8292",
            "longitude": "31.0539"
          },
          "founder": {
            "@type": "Person",
            "name": "Joseph Chamakandiona",
            "jobTitle": "Owner & Lead Builder"
          },
          "openingHours": "Mo-Fr 07:30-17:00, Sa 08:00-13:00",
          "priceRange": "$$",
          "sameAs": [],
          "image": `https://hipvalley.co.zw${image}`,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "nameOfPart": "Construction Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Home Building",
                  "description": "Build your dream home from the ground up"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Home Renovations",
                  "description": "Transform your existing home with expert renovations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Home Extensions",
                  "description": "Expand your living space with seamless home additions"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = "website" }) => {
    const siteName = "Biswajit Daimary | Speaker of Assam Legislative Assembly";
    const defaultDescription = "Official website of Biswajit Daimary, honorable Speaker of the Assam Legislative Assembly and dedicated servant to the people of Assam.";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const metaDescription = description || defaultDescription;
    const siteUrl = "https://biswajitdaimary.in";
    const logoUrl = `${siteUrl}/logo.svg`;

    // Schema.org JSON-LD
    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Biswajit Daimary",
            "jobTitle": "Speaker of the Assam Legislative Assembly",
            "affiliation": {
                "@type": "Organization",
                "name": "Assam Legislative Assembly"
            },
            "url": siteUrl,
            "image": "https://newslivetv.com/wp-content/uploads/2021/02/Assam-Biswajit-Daimary-to-be-BJP-candidate-for-Rajya-Sabha-by-polls.jpg",
            "sameAs": [
                "https://x.com/BiswajitDaimar5",
                "https://www.facebook.com/BiswajitdaimaryMP/",
                "https://www.instagram.com/biswajitdaimary_/"
            ]
        }
    ];

    if (type === "Organization") {
        schemaData.push({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "Office of the Speaker, Assam Legislative Assembly",
            "url": siteUrl,
            "logo": logoUrl,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Guwahati",
                "addressRegion": "Assam",
                "addressCountry": "India"
            }
        });
    }

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content="Biswajit Daimary" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type === "Person" ? "profile" : "website"} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={`${siteUrl}${url}`} />}
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Canonical Link */}
            {url && <link rel="canonical" href={`${siteUrl}${url}`} />}

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;

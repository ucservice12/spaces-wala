import { metadata } from "../meta/shareMeta.js";

export const shareContent = (req, res) => {
  const { id } = req.params;

  const data = metadata[id] || metadata["homeherosection"];
  console.log(data)
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${data.title}</title>
        <meta name="description" content="${data.description}" />
        
        <!-- Open Graph / Facebook / LinkedIn -->
        <meta property="og:site_name" content="Spaceswala" />
        <meta property="og:title" content="${data.title}" />
        <meta property="og:description" content="${data.description}" />
        <meta property="og:image" content="${data.image}" />
        <meta property="og:image:secure_url" content="${data.image}" />
        <meta property="og:image:alt" content="${data.title}" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${data.url}" />
        <meta property="og:locale" content="en_IN" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@spaceswala" />
        <meta name="twitter:creator" content="@spaceswala" />
        <meta name="twitter:title" content="${data.title}" />
        <meta name="twitter:description" content="${data.description}" />
        <meta name="twitter:image" content="${data.image}" />
        <meta name="twitter:image:alt" content="${data.title}" />
        <meta name="twitter:label1" content="Category" />
        <meta name="twitter:data1" content="Real Estate" />
        <meta name="twitter:label2" content="Published" />
        <meta name="twitter:data2" content="August 2025" />

        <!-- Schema.org Structured Data -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "${data.title}",
          "description": "${data.description}",
          "url": "${data.url}",
          "image": {
            "@type": "ImageObject",
            "url": "${data.image}",
            "width": 1200,
            "height": 630
          },
          "publisher": {
            "@type": "Organization",
            "name": "Spaceswala",
            "logo": {
              "@type": "ImageObject",
              "url": "https://spaceswala.com/logo.png"
            }
          }
        }
        </script>

        <!-- Favicon & Theming -->
        <link rel="icon" href="https://spaceswala.com/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="application-name" content="Spaceswala" />
        <meta name="apple-mobile-web-app-title" content="Spaceswala" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <!-- Preload Image -->
        <link rel="preload" as="image" href="${data.image}" />

        <!-- Canonical -->
        <link rel="canonical" href="${data.url}" />
    </head>
    <body>
        <script>
            window.location.replace("${data.url}");
        </script>
    </body>
    </html>
    `;

  res.send(html);
};

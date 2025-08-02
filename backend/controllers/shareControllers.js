import { shareMeta } from "../meta/shareMeta.js";

export const shareContent = (req, res) => {
    const { id } = req.params;
    const data = shareMeta[id] || shareMeta["home"];
    console.log(data)
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${data.title}</title>
        <meta name="description" content="${data.description}" />
        <meta property="og:title" content="${data.title}" />
        <meta property="og:description" content="${data.description}" />
        <meta property="og:image" content="${data.image}" />
        <meta property="og:url" content="${data.url}" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${data.title}" />
        <meta name="twitter:description" content="${data.description}" />
        <meta name="twitter:image" content="${data.image}" />
    </head>
    <body>
        <script>
            window.location.replace("${data.url}");
        </script>
    </body>
    </html>`;

    res.send(html);
};

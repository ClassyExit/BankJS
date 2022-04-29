module.exports = ({ content, titlePage = "Bank" }) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titlePage}</title>

            <link href="/css/main.css" rel="stylesheet">
            <link href="/css/auth.css" rel="stylesheet">
        </head>
          <body>
              ${content}
          </body>
          </html>
      `;
};

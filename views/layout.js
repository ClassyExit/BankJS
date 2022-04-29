// General layout - headers, links, etc

module.exports = ({ content = "", titlePage = "Bank" }) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="/css/auth.css" rel="stylesheet">
            <title>${titlePage}</title>
        </head>
        <body>
            <header>
                <div class="container navbar-container">
                    <div>
                        <form method="get" action="/signup">
                            <button id="signup-in-button" href="/signup">Signup</button>
                        </form>
                        <form method="get" action="/signin">
                            <button id="signup-in-button" href="/signin">Signin</button>
                        </form>
                    </div>
            ${content}
        </body>
        </html>
    `;
};

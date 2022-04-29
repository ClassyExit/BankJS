module.exports = ({ currentUser }) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="/css/dashboard.css" rel="stylesheet">

            <script src="https://kit.fontawesome.com/7816c50242.js" crossorigin="anonymous">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@1000&display=swap" rel="stylesheet"> 
            </script>

            <title>Dashboard</title>

        </head>
        
      <body>
        <nav id="sidebar">
            <ul>
                <li>
                <a href="/bank/dashboard"> <i class="fa fa-home" aria-hidden="true"></i><p>Home</p></a>
                </li>
                <li>
                <a href="/bank/transaction"> <i class="fa fa-money" aria-hidden="true"></i><p>Transactions</p></a>
                </li>
                <br><br>
                <li>
                    <a href="/signout"><i class="fa fa-sign-out" aria-hidden="true"></i><p>Sign out</p></a>
                </li>
            </ul>
            </nav>
        <div class="main">
            <p> Add content here </p>
        </div>
      </body>
    `;
};

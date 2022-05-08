const { getError } = require("../helpers");

module.exports = ({ currentUser, errors }) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="/css/dashboard.css" rel="stylesheet">
          <link href="/css/main.css" rel="stylesheet">

          <script src="https://kit.fontawesome.com/7816c50242.js" crossorigin="anonymous">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@1000&display=swap" rel="stylesheet"> 
          </script>

          <title>Dashboard</title>

      </head>
      
    <body>
      <nav id="sidebar">
        <p> ID: ${currentUser.id} </p>
        <p name="currentBalance"> Balance: $${parseFloat(
          currentUser.balance
        ).toFixed(2)} </p>
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
      <nav id="main">
        <div id="account-area">
            <div class="container-display">                   
                <div class="balance status">
                    <h5>Balance</h5>
                    <h2> $<span id="current-balance" name="currentBalance">${parseFloat(
                      currentUser.balance
                    ).toFixed(2)}</span></h2>
                </div>
            </div>

            <div class="container-input">
                <div class="row">
                    <form method="POST">
                        <div class="submit-area">
                            <h4>Deposit Amount</h4>
                            <input id="deposit-amount" type="number" class="form-control" name="depositRequest" placeholder="Enter deposit amount"><br>
                            <button id="deposit-btn" class="btn btn-success">Deposit</button>
                        </div>
                        
                        <div class="submit-area">
                            <h4>Withdraw Amount</h4>
                            <input id="withdraw-amount" type="number" class="form-control" name="withdrawlRequest" placeholder="Enter withdraw amount"><br>
                            <button id="withdraw-btn" class="btn btn-success type="submit" ">Withdraw</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </nav>

    </body>
    `;
};

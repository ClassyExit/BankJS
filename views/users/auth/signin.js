const authLayout = require("../authLayout");
const { getError } = require("../../helpers");

module.exports = ({ errors }) => {
  return authLayout({
    titlePage: "SignIn",
    content: `
        <div class="flex-container">
          <div class="content-container">
            <div class="form-container">
              <form method="POST">
                <h1>Login</h1>
                <br>
                <input required class="input" placeholder="Email" name="email" />
                <p class="help-auth">${getError(errors, "email")}</p>
                <br>
                <input required class="input" placeholder="Password" name="password" type="password" />
                <p class="help-auth">${getError(errors, "password")}</p>
                <br>
                <input type="submit" value="SUBMIT" class="submit-btn">
              </form>

              <a href="/signup">Need an account? Sign Up</a>
            </div>
              
          </div>
        </div>
          `,
  });
};

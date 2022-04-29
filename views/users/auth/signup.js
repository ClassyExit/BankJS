const authLayout = require("../authLayout");
const { getError } = require("../../helpers");

module.exports = ({ errors }) => {
  return authLayout({
    titlePage: "SignUp",
    content: `
        <div class="flex-container">
          <div class="content-container">
            <div class="form-container">
              <form method="POST">
                <h1> Create Account</h1>
                <br>
                <input class="input" placeholder="Enter an email" name="email" />
                <p class="help-auth">${getError(errors, "email")}</p>
                <br>
                <input class="input" placeholder="Password" name="password" type="password" />
                <p class="help-auth">${getError(errors, "password")}</p>
                <br>
                <input class="input" placeholder="Confirm Password" name="passwordConfirmation" type="password" />
                <p class="help-auth">${getError(
                  errors,
                  "passwordConfirmation"
                )}</p>
                <input type="submit" value="SUBMIT" class="submit-btn">
              </form>
            
              <a href="/signin">Have an account? Log In</a>
            </div>
          </div>
        </div>
        `,
  });
};

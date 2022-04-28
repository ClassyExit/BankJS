const express = require("express");

const signupTemplate = require("../../views/users/auth/signup");
const signinTemplate = require("../../views/users/auth/signin");
const usersRepo = require("../../repo/users");
const { handleErrors } = require("./middlewares");

const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser,
} = require("./validators");

const router = express.Router();

// Sign up
router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  "/signup",
  [requireEmail, requirePassword, requirePasswordConfirmation],
  handleErrors(signupTemplate),
  async (req, res) => {
    const { email, password } = req.body;
    const user = await usersRepo.create({ email, password });

    req.session.userId = user.id;

    res.redirect("/signin");
  }
);

// Sign out
router.get("/signout", (req, res) => {
  req.session = null; // clear user cookie
  res.redirect("/");
});

// Sign in
router.get("/signin", (req, res) => {
  res.send(signinTemplate({ req }));
});

router.post(
  "/signin",
  [requireEmailExists, requireValidPasswordForUser],
  handleErrors(signinTemplate),
  async (req, res) => {
    const { email } = req.body;

    const user = await usersRepo.getOneBy({ email });

    // store user id in cookies
    req.session.userId = user.id;

    res.redirect("/bank/dashboard");
  }
);

module.exports = router;

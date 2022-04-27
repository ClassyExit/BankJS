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

// Sign up validation handling
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
  res.send("You are logged out");
});

// Sign in
router.get("/signin", (req, res) => {
  res.send(signinTemplate({ req }));
});

// Sign in validation
router.post(
  "/signin",
  [requireEmailExists, requireValidPasswordForUser],
  handleErrors(signinTemplate),
  async (req, res) => {
    const { email } = req.body;

    const user = await usersRepo.getOneBy({ email });

    req.session.userId = user.id;
    
    res.redirect(`/${sessionId}/dashboard`);
  }
);

module.exports = router;

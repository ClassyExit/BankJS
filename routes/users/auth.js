const express = require("express");

const signupTemplate = require("../../views/users/auth/signup");
const signinTemplate = require("../../views/users/auth/signin");

const router = express.Router();

// Sign up
router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req }));
});

// Sign up validation handling

// Sign out
router.get("/signout", (req, res) => {
  res.send("You are logged out");
});

// Sign in
router.get("/signin", (req, res) => {
  res.send(signinTemplate({ req }));
});

module.exports = router;

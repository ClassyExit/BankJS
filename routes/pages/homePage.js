const express = require("express");

const homePageTemplate = require("../../views/layout");

const router = express.Router();

// Landing page
router.get("/", (req, res) => {
  res.redirect("/home");
});

router.get("/home", (req, res) => {
  res.send(homePageTemplate({}));
});

module.exports = router;

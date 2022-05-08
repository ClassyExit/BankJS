const express = require("express");

const homePageTemplate = require("../../views/pages/homePage");

const router = express.Router();

// Landing page/Home page
router.get("/", (req, res) => {
  res.redirect("/home");
});

router.get("/home", (req, res) => {
  res.send(homePageTemplate({}));
});

module.exports = router;

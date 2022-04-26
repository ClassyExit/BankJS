const express = require("express");

const landingPage = require("../../views/pages/landingPage");

const router = express.Router();

// Landing page
router.get("/", (req, res) => {
  res.send(landingPage({ req }));
});

module.exports = router;

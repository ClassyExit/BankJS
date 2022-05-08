const express = require("express");

const dashboardTemplate = require("../../views/pages/dashboard");
const { requireAuth } = require("../users/middlewares");
const usersRepo = require("../../repo/users");

const router = express.Router();

// route to dashboard
router.get("/bank/dashboard", requireAuth, async (req, res) => {
  // Get user info with userId from cookie session
  const currentUser = await usersRepo.getOneBy({ id: req.session.userId });

  res.send(dashboardTemplate({ currentUser }));
});

module.exports = router;

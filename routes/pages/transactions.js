const express = require("express");

const dashboardTemplate = require("../../views/pages/dashboardTemplate");
const { requireAuth } = require("../users/middlewares");
const usersRepo = require("../../repo/users");

const router = express.Router();

router.get("/bank/transaction", requireAuth, async (req, res) => {
  const currentUser = await usersRepo.getOneBy({ id: req.session.userId });
  res.send(dashboardTemplate({ currentUser, titlePage: "Transaction" }));
});

module.exports = router;

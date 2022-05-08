const express = require("express");

const transactionTemplate = require("../../views/pages/transactions");
const { requireAuth } = require("../users/middlewares");
const usersRepo = require("../../repo/users");
const { handleErrors } = require("../users/middlewares");

const router = express.Router();

const { requireValidWithdrawlAmount } = require("../users/validators");

router.get("/bank/transaction", requireAuth, async (req, res) => {
  const currentUser = await usersRepo.getOneBy({ id: req.session.userId });
  res.send(transactionTemplate({ req, currentUser }));
});

router.post(
  "/bank/transaction",
  requireAuth,
  handleErrors(transactionTemplate),
  async (req, res) => {
    // get deposit/withdrawl information from page
    const { depositRequest, withdrawlRequest } = req.body;
    const currentUserId = req.session.userId;
    const user = await usersRepo.getOneBy({ id: currentUserId });

    console.log(handleErrors());
    // Update balances
    if (depositRequest) {
      const newBalance = parseFloat(user.balance) + parseFloat(depositRequest);
      await usersRepo.update(currentUserId, { balance: newBalance });
    }

    if (withdrawlRequest) {
      const newBalance =
        parseFloat(user.balance) - parseFloat(withdrawlRequest);
      await usersRepo.update(currentUserId, { balance: newBalance });
    }

    res.redirect("/bank/transaction");
  }
);

module.exports = router;

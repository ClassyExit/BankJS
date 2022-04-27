const { validationResult } = require("express-validator");

//Handle pre-processing on req and res objects
module.exports = {
  // Get validation errors and pass in html template
  handleErrors(templateFunc, dataCb) {
    return async (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        let data = {};
        if (dataCb) {
          data = await dataCb(req);
        }

        return res.send(templateFunc({ errors, ...data }));
      }

      next();
    };
  },
  // Check to see if user is logged in via cookies
  requireAuth(req, res, next) {
    if (!req.session.userId) {
      return res.redirect("/signin");
    }

    next();
  },
};

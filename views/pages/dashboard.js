const dashboardTemplate = require("./dashboardTemplate");
const usersRepo = require("../../repo/users");
module.exports = () => {
  return dashboardTemplate({
    titlePage: "Dashboard",
    content: `
          <p> Dashboard! </p>
        `,
  });
};

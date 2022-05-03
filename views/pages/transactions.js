const dashboardTemplate = require("./dashboardTemplate");

module.exports = () => {
  return dashboardTemplate({
    titlePage: "Transaction",
    content: `

        <div id="main">
            <p> Transaction page! </p>
        </div>
      `,
  });
};

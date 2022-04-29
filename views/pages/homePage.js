const layout = require("../layout");

module.exports = () => {
  return layout({
    titlePage: "Home Page",
    content: `
        <p> Home page!</p>
      `,
  });
};

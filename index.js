const express = require("express");
const bodyParser = require("body-parser"); // Parse incoming requests
const cookieSession = require("cookie-session"); // Use browser cookie
const userAuthRouter = require("./routes/users/auth"); // Sign in/up pages
const homePageRouter = require("./routes/pages/homePage");
const dashboardRouter = require("./routes/pages/dashboard");
const transactionRouter = require("./routes/pages/transactions");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["adawdwad"],
  })
);
app.use(userAuthRouter);
app.use(homePageRouter);
app.use(dashboardRouter);
app.use(transactionRouter);

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
app.listen(3000, "192.168.1.16");

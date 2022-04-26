const express = require("express");
const bodyParser = require("body-parser"); // Parse incoming requests
const cookieSession = require("cookie-session"); // Use browser cookie
const userAuthRouter = require("./routes/users/auth");
const landingPageRouter = require("./routes/pages/landingPage");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["adawdwad"],
  })
);
app.use(userAuthRouter);
app.use(landingPageRouter);

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));

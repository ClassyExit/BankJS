const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["lkasld235j"], // contents of keys does not matter
  })
);

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));

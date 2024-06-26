const path = require("path");
const express = require("express");
const app = express();
//const handlebars = require("express-handlebars");
const morgan = require("morgan");
const port = 8080;

//HTTP logger
app.use(morgan("combined"));

//config template engine
app.set("views", path.join(__dirname, "views"));
//app.set("views", "./views");
app.set("view engine", "ejs");

//khai bao route
app.get("/", (req, res) => {
  res.render("abc_page");
});

app.get("/a", (req, res) => {
  res.render("abc_page");
});

app.get("/b", (req, res) => {
  res.render("page_b");
});

app.get("/hello", (req, res) => {
  res.render("footer");
});
app.get("/", (req, res) => {
  res.render("footer");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// thư mục chứa file public
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("assets")); // những file trong folder public và access đều có thể nhìn thấy bởi người dùng web

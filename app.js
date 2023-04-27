const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const toDoList = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, toDoList: toDoList });
});

app.post("/", (req, res) => {
  const toDoItem = req.body.item;
  toDoList.push(toDoItem);

  res.redirect("/");
});

app.listen(5050, console.log("Port listening on port 5050"));

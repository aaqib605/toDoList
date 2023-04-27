const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const toDoList = [];
const workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Root Route
app.get("/", (req, res) => {
  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, toDoList: toDoList });
});

app.post("/", (req, res) => {
  const toDoItem = req.body.item;

  if (req.body.list === "Work List") {
    workItems.push(toDoItem);
    res.redirect("/work");
  } else {
    toDoList.push(toDoItem);
    res.redirect("/");
  }
});

// Work Route
app.get("/work", (req, res) => {
  res.render("list", { listTitle: `Work List`, toDoList: workItems });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(5050, console.log("Port listening on port 5050"));

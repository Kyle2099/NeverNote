const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for incoming POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
/* If the Node mode is production (if we're running in production)
   then we want to setup our static file to point to client/build */
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// GET rotue 
app.get("/api/todos", function (req, res) {
  db.Todo
    .find({})
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});
// POST route
app.post("/api/todo"), (req, res) => {
  const newTodo = {
    todo: req.body.todo,
    note: req.body.note,
    deadline: req.body.deadline,
    category: req.body.category
  };
  db.Todo
    .create(newTodo)
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
};




// Send every request to the React app, that doesn't match
// another Express route
// Define any API routes before this runs
// This route is ALWAYS at the bottom of our routes list
// Catches anything that doesn't match an existing route
// and sends it to React
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect("mongodb://prod:123456a@ds263710.mlab.com:63710/heroku_6zts412b");

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

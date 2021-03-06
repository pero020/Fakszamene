
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const test = require(__dirname + "/data/test.js")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Global Variables

// Routing

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/test", function(req, res) {
  res.render("test", {
    questions: test.questions()
  })
});

app.post("/results", function(req, res) {
  const data =  req.body;

  const topicPoints = {};
  const topics = test.topics();
  for (var i=0; i < topics.length; i++) {
    topicPoints[topics[i]] = test.countPoints(data, topics[i]);
  }

  const colleges = test.pickCollege(topicPoints);
  
  res.render("results", {
    colleges: colleges,
  });
});












app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});

console.log("Web serverni boshlash");
const express = require("express");
const app = express();
// const fs = require("fs");


//Calling MongoDB
const db = require("./server").db();


//1 KIRISH CODE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session CODES

//3 VIEWS CODES
app.set("views", "views");
app.set("view engine", "ejs");


//4 ROUTING CODES
app.get("/", function (req, res) {
  res.render("reja");
});

app.post("/create-item", (req, res)=>{
  console.log(req.body);
  res.end("Success")
})

module.exports = app;


// app.get("/author", (req, res) => {
//   res.render("author.ejs", { user: user });
// });


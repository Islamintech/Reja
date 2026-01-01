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
  console.log("user entered to here /")
  db.collection("plans").find().toArray((err, data)=>{
    if(err) {
      console.log(err);
      res.end("something went wrong!");
    }else{
      console.log(data);
      res.render("reja", {items: data})
    }
  });
});

app.post("/create-item", (req, res)=>{
  console.log("user entered here to /create-item")
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data)=>{
    if(err){
      console.log(err);
      res.end('Something went worng!');
    }else{
      res.end("successfully added");
    }
  })
})

module.exports = app;


// app.get("/author", (req, res) => {
//   res.render("author.ejs", { user: user });
// });


console.log("Web serverni boshlash");
const express = require("express");
const app = express();
// const fs = require("fs");


//Calling MongoDB
const db = require("./server").db();
const mongodb = require("mongodb");


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

app.post("/delete-item", (req, res)=>{
  const id = req.body.id;
  db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, 
  function(err, data){
    res.json({state: "success"});
  })
});

app.post("/delete-all", (req, res)=>{
  if(req.body.delete_all){
    db.collection("plans").deleteMany(function(){
      res.json({state: "All plans have been deleted"})
    });
  }
})

app.post("/edit-item", (req, res)=>{
  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)},
    {$set: {reja: data.new_input} },
function(err, data){
  res.json({state: "success"});
})
});

app.post("/create-item", (req, res)=>{
  console.log("user entered here to /create-item")
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data)=>{
    res.json(data.ops[0]);
  })
})

module.exports = app;


// app.get("/author", (req, res) => {
//   res.render("author.ejs", { user: user });
// });


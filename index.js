const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require("body-parser");

const todoRoutes = require("./routes/todos.js")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));


app.get("/", function(req, res){
    res.sendFile("index.html")
});  

app.use("/api/todos", todoRoutes);
  
app.listen(port, function(){
    console.log("App is running on PORT" + " " + process.env.PORT);
})
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public")); 

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("index.htm", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/receiver.html", function(req, res){
    res.sendFile(__dirname + "/receiver.html"); 
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("La aplicación funciona en http://%s:%s", host, port); 
});
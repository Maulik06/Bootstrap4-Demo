var express=require('express');
var app=express();

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});
app.get("*", (req,res)=>{
    res.sendStatus(404);
});

app.listen(3000, ()=>{
    console.log("Server running on localhost:3000");
    console.log("Your routes will be running on http://localhost:3000");
});



var express = require("express");
var app = express();
app.use(express.static(__dirname+"/dist/shop"));



app.get("/", (req, res)=> {
   res.sendFile(__dirname + "/dist/shop/index.html");
 });



app.listen(process.env.PORT || 8080);
console.log("run server!");
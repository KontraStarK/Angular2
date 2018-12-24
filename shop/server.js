var express = require("express");
var app = express();
app.use(express.static(__dirname+"/dist/shop"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//підключаємо mongoose-модель
var Product = require("./models/products");


app.get("/", (req, res)=> {
   res.sendFile(__dirname + "/dist/shop/index.html");
 });


 app.get('/getproducts', function(req, res) {
    Product.find(function(err, data) {
      res.send(data);
    });
});




app.listen(process.env.PORT || 8080);
console.log("run server!");
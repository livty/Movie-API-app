var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("search");
});
app.get("/results",function(req,res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query;
    request(url,function(error,response,body){
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        var data = JSON.parse(body);
        res.render("results",{data: data});
    
    });
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie app is on");
});
var express=require("express"),
    request=require("request");
    

 var app=express();
 app.set("view engine","ejs");
 

 

 app.get("/",function(req,res){

         res.render("search");
         
      })

 

 app.get("/results",function(req,res){
   var email=req.query.Email;

   var url="https://api.trumail.io/v2/lookups/json?email="+email
   request(url,function(err,response,body){
      if(!err&&response.statusCode==200){
         var data=JSON.parse(body)
         res.render("result",{data:data})
      }


 })
});
 

 app.listen(3000,function(){

    console.log("Server has started");

 })

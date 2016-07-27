var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var request = require('request');
var fdata = {};
var mailSchema = require("./mailSchema");
router.get('/', function (req, res) {


     mailSchema.find(function(err, data){

   fdata = data;
console.log("getdata "+fdata);
    res.send(fdata);
 });

// db.close();
});
router.post('/', function(req, res, next) {
  var data=req.body;

     var obj=new mailSchema(data);
     mailSchema.find({msg_id:req.body.msg_id},function(err, data){
if(data==='')
{
  obj.save(function(err){
       if (err)
       {
        // res.send({"msg":err});
       }
      else
      {
      //  res.send({"msg":"Data inserted"});
      }

     });
}

else
{
  console.log("Data is already in database");
//  res.send({"msg":"Data is already in database"});
}

});


  res.send(" Inserted");
  });




module.exports = router;

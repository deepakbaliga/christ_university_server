var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');






/*
    Description : Addidng user to the database if doesnt exist already
    Param : full_name, register_number, student_id, class_id, password
*/
router.post('/user', function (req, res) {

    var response = {};

    if(req.body.full_name && req.body.student_id && req.body.register_number && req.body.class_id && req.body.password){

      var full_name = req.body.full_name;
      var student_id = req.body.student_id;
      var register_number = req.body.register_number;
      var class_id = req.body.class_id;
      var password = req.body.password;

      //Add to database

      //Sending test response
      response.error = false;
      response.message = "";
      response.data.full_name = full_name;
      response.data.student_id = student_id;
      response.data.register_number = register_number;
      response.data.class_id = class_id;
      response.data.password = password;







    }else{

      response.error = true;
      response.message = "One or more fields missing";
      response.data = null;

    }

    res.end(JSON.stringify(response));
});





module.exports = router;

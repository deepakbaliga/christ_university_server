var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');






/*
    Param : full_name, register_number, student_id, class_id, password
*/
router.post('/user', function (req, res) {

    var response = {};

    if(req.body.full_name && req.body.student_id && req.body.register_number && req.body.class_id && req.body.password){

      //Add to database
      

    }else{

      response.error = true;
      response.message = "Field Missing";
    }

    res.end();
});





module.exports = router;

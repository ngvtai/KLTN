const authorController=require("../controller/controller");

const router=require("express").Router();
 //add rate mongodb
  router.post("/insert_mongodb", authorController.insert_mongo);
  //get rate mongodb
  router.get("/select_mongodb",authorController.get_mongo);
  //insert rate mysql
  router.get("/insert_mysql",authorController.insert_mysql);

  router.get("/insert_test_mysql/:id_user",authorController.insert_test_mysql);

  router.post("/book/add",authorController.insert_test_mysql2);

  router.delete("/delete_mysql/:id",authorController.remove_mysql)
  router.get("/selet_mysql",
      function(req,res)
      {
        res.send("hello about");
      }
  );


  
module.exports =router;


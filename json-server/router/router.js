const authorController=require("../controller/controller");

const router=require("express").Router();
 //add rate mongodb
  router.post("/insert_mongodb", authorController.insert_mongo);
  //get rate mongodb
  router.get("/select_mongodb",authorController.get_mongo);
  //insert rate mysql
  //router.get("/insert_mysql",authorController.insert_mysql);
  router.get("/insert_mysql",authorController.insert_mysql);

  router.get("/insert_test_mysql/:id_user",authorController.insert_test_mysql);

  router.post("/insert_rate_mysql/",authorController.insert_test_mysql2);
  
  router.delete("/delete_mysql/:id",authorController.remove_mysql);

  router.put("/update_mysql",authorController.update_mysql);

  
  router.get("/selet_id_mysql/:id_user",
  authorController.select_id_mysql
  );
module.exports =router;


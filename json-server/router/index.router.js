const {mongodb_controll,mysql_controll,postgressql_controll}=require("../controller/rate.controller");
const { mongodb_rate } = require("../model/rate.model");


const router=require("express").Router();

 //add rate mongodb
  router.post("/insert_mongodb", mongodb_controll.insert_mongo);
  //get rate mongodb
  router.get("/select_mongodb",mongodb_controll.get_mongo);
  //insert rate mysql
  //router.get("/insert_mysql",authorController.insert_mysql);
  router.get("/insert_mysql",mysql_controll.insert_mysql);

  router.get("/insert_test_mysql/:id_user",mysql_controll.insert_test_mysql);

  router.post("/insert_rate_mysql/",mysql_controll.insert_test_mysql2);
  
  router.delete("/delete_mysql/:id",mysql_controll.remove_mysql);

  router.put("/update_mysql",mysql_controll.update_mysql);

  router.get("/selet_id_mysql/:id_user",mysql_controll.select_id_mysql);
// postgressql

router.get("/insert_postgres",postgressql_controll.insert_postgres);

router.get("/insert_test_postgres/:id_user",postgressql_controll.insert_test_postgres);

router.post("/insert_rate_postgres/",postgressql_controll.insert_test_postgres2);

router.delete("/delete_postgres/:id",postgressql_controll.remove_postgres);

router.put("/update_postgres",postgressql_controll.update_postgres);
  
router.get("/selet_id_postgres/:id_user",postgressql_controll.select_id_postgres);
  
module.exports =router;


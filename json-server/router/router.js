const {mongodb_controll,mysql_controll,postgressql_controll}=require("../controller/controller");
const { mongodb_rate } = require("../model/model");
const JWT =require("../JWT/_JWT");

const router=require("express").Router();
//JSONWEBTOKEN
  router.get("/token", async function(req,res) {
    try {
      var user={
        "username":"admin",
        "password":"123"
      };
      const _token=await JWT.make(user); 
      res.send({_token:_token});
    } catch (error) {
        console.log(error);
    }
  
  });
  router.get("/check_token", async function(req,res) {
    try {
      var token="deyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IjEyMyJ9LCJpYXQiOjE2NjU0NTI5NDksImV4cCI6MTY2NTQ1NjU0OX0.kcLh33U3alHpjSAHX4UcE_WZUEzWJ1JfTItDosWRsdo";
      const data=await JWT.check(token); 
      res.send({data:data});
    } catch (error) {
        res.send("ma nay khong dung");
    }
  
  });

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


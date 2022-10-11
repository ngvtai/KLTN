const {mongodb_controll,mysql_controll,postgressql_controll}=require("../controller/user.controller");
const router=require("express").Router();
router.post("/login_mongo",mongodb_controll.login_mongodb);
router.post("/login_mysql",mysql_controll.login_mysql);
router.post("/login_postgres",postgressql_controll.login_postgres);

module.exports=router;

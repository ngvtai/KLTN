const {mongodb_controll}=require("../controller/user.controller");
const router=require("express").Router();
router.post("/login",mongodb_controll.login);
module.exports=router;

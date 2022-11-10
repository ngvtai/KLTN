const {mongodb_controll}=require("../controller/user.controller");
const router=require("express").Router();
router.get("/login",mongodb_controll.login);
router.get("/changeuser",mongodb_controll.changeuser);
router.get("/getvaitro",mongodb_controll.getvaitro);
router.post("/insertuser",mongodb_controll.insertuser);
router.post("/insertvaitro",mongodb_controll.insertvaitro);
module.exports=router;

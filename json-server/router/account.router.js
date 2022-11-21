const {mongodb_controll}=require("../controller/user.controller");
const router=require("express").Router();

//thay doi thong tin user
router.post("/changeuser",mongodb_controll.changeuser);
//lay tat ca vai tro 
router.get("/getvaitro",mongodb_controll.getvaitro);
//them nguoi dung voi vao
router.post("/insertuser",mongodb_controll.insertuser);
//them vai tro moi vao
router.post("/insertvaitro",mongodb_controll.insertvaitro);
//kiem tra user nam co ton tai hay khong
router.post("/checkusername",mongodb_controll.checkusername);
//lay tat ca user name
router.get("/getUser",mongodb_controll.getUser);
//thay doi mat khau
router.post("/changepassword",mongodb_controll.changepassword);
//lay thong tin he thong
router.get("/getHT",mongodb_controll.getHethong);
//lay don le thong tin cua mot user truyen qua id
router.post("/getinforuser",mongodb_controll.getinforuser);
//detele user 
router.post("/deleteuser",mongodb_controll.deleteuser);
//delete ht

module.exports=router;

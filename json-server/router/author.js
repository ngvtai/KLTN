const authorController=require("../controller/authorcontroller");

const router=require("express").Router();
 //add rate
  router.post("/", authorController.addAuthor);
  //get rate
  router.get("/",authorController.getrate);
module.exports =router;


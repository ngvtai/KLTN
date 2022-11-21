const {mongodb_controll}=require("../controller/rate.controller");
const { mongodb_rate } = require("../model/rate.model");
const router=require("express").Router();

  router.post("/sendrate", mongodb_controll.sendrate);
  router.post("/insertsystem", mongodb_controll.insertsystem);
  router.post("/changesys", mongodb_controll.changesys);
  router.post("/deletesys",mongodb_controll.deletesys);
  router.post("/checksys",mongodb_controll.checksys);
  router.post("/getinforsys",mongodb_controll.getinforsys);
module.exports =router;


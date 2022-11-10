const {mongodb_controll}=require("../controller/rate.controller");
const { mongodb_rate } = require("../model/rate.model");
const router=require("express").Router();

  router.post("/sendrate", mongodb_controll.sendrate);
  router.post("/insertsystem", mongodb_controll.insertsystem);

module.exports =router;


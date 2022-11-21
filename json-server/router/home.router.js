const JWT =require("../JWT/_JWT");
const router=require("express").Router();
//JSONWEBTOKEN
  router.get("/login", async function(req,res) {
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
      var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IjEyMyJ9LCJpYXQiOjE2Njg0NzcxODcsImV4cCI6MTY2ODQ4MDc4N30.sqlfDWFMTCOhuJ7kkUdE6loJv3-RL28-x9oPlDb2Gvw";
      const data=await JWT.check(token); 
      res.send({data:data});
    } catch (error) {
        res.send("ma nay khong dung"); 
    }

  });
  module.exports =router;
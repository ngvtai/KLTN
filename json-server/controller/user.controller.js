const {mongodb_user,vaitro}=require("../model/user.model");
// var _JWT=require('../JWT/_JWT');
const mongodb_controll={
    login:async(req,res)=>{
        try {
            const rate_get=await mongodb_user.find({username:req.body.username,password:req.body.password});
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    insertuser:async(req,res)=>{
        try {
          const insert_d=new  mongodb_user(req.body);
          const returne=await insert_d.save();
          res.status(200).json(returne);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    changeuser:async(req,res)=>{
        try {
            const insert_d=new  mongodb_user(req.body);
            const returne=await insert_d.save();
            res.status(200).json(1);
          } catch (error) {
              res.status(500).json(error);
          }
    },insertvaitro:async(res,req)=>{
        try {
            const insertvaitro=new  vaitro(req.body);
            const returne=await insertvaitro.save();
            res.status(200).json(1);
          } catch (error) {
              res.status(500).json(error);
          }
    },
    getvaitro:async(req,res)=>{
        try {
            const get_vaitro=await vaitro.find();
            res.status(200).json(get_vaitro);
          } catch (error) {
             res.status(500).json(error);
          }
    },
    changepassword:async(req,res)=>{
        try {
            const get_vaitro=await vaitro.find();
            res.status(200).json(get_vaitro);
          } catch (error) {
             res.status(500).json(error);
          } 
    }
}
module.exports={mongodb_controll};
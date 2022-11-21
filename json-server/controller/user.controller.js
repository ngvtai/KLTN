const {mongodb_user,vaitro}=require("../model/user.model");
const {mongodb_rate,hethong}=require("../model/rate.model");
var _JWT=require('../JWT/_JWT');
const mongodb_controll={
    login:async(req,res)=>{
        try {
            const rate_get=await mongodb_user.find({username:req.body.username,password:req.body.password},{ idQT: 1, tenQT: 1, Vaitro: 1 ,Hethong: 1});
            if(rate_get!=""){
                const _token=await _JWT.make(rate_get); 
                res.status(200).json({user:rate_get,_token:_token,status:true});  
            }else{
                res.status(200).json({user:"",_token:"",status:false});  
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    insertuser:async(req,res)=>{
        try {
            req.body.idQT=await mongodb_user.find().count()+1;
          const insert_d=new  mongodb_user(req.body);
          const returne=await insert_d.save();
         res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    changeuser:async(req,res)=>{
        try {
            const insert_d=new  mongodb_user(req.body);
            console.log(insert_d);
            const returne=await insert_d.updateOne({idQT:req.body.idQT},
                {$set:req.body
            });
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
            const insert_d=new  mongodb_user(req.body);
            console.log(insert_d);
            const returne=await insert_d.updateOne({idQT:req.body.idQT},
                {$set:{password:req.body.password}
            });
            res.status(200).json(1);
          } catch (error) {
             res.status(500).json(error);
          } 
    },
    getUser:async(req,res)=>{
        try {
            const getuser=await mongodb_user.find({},{ idQT: 1, tenQT: 1, Vaitro: 1 ,Hethong: 1,username:1});
            res.status(200).json(getuser);
          } catch (error) {
             res.status(500).json(error);
          }
    },
    getHethong:async(req,res)=>{
         try {
            const gethethong=await hethong.find();
            res.status(200).json(gethethong);
          } catch (error) {
             res.status(500).json(error);
          }
    },
    checkusername:async(req,res)=>{
        try {
            const getuser=await mongodb_user.find({username:req.body.username},{ tenQT: 1});
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    ,getinforuser:async(req,res)=>{
        try {
            const getuser=await mongodb_user.find({idQT:req.body.idQT},{ tenQT: 1,Vaitro:1,Hethong:1,username:1});
        
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    },deleteuser:async(req,res)=>{
        try {
            const getuser=await mongodb_user.deleteMany({idQT:req.body.idQT});
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports={mongodb_controll};
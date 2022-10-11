const {mongodb_user,mysql_user,postgress_user}=require("../model/user.model");
var _JWT=require('../JWT/_JWT');
const mongodb_controll={
    login_mongodb:async(req,res)=>{
        try {
            const rate_get=await mongodb_user.find();
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}
const mysql_controll={
    login_mysql:async(req,res)=>{
        try {
            var data=req.body;
            mysql_user.check_login_mysql(data,function(response){
                    res.send({result: response});
                });
              
        } catch (error) {
            
        }
    },
}
const postgressql_controll={
    login_postgres:async(req,res)=>{
        try {
          
            var data=req.body;
            postgress_user.check_login_postgress(data,async function(response){
                if(response)
                {
                    const _token=await _JWT.make(response); 
                    res.send({_token:_token});
                }
                    //res.send({result: response});
                });
              
        } catch (error) {
            console.log(error);
        }
    },
}
module.exports={mongodb_controll,mysql_controll,postgressql_controll};
const {mongodb_rate,mysql_rate,postgres_rate}=require("../model/rate.model");

const mongodb_controll={
    insert_mongo:async(req,res)=>{
        try {
              const newrate=new mongodb_rate(req.body);
             const saveAuthor=await newrate.save();
             res.status(200).json(saveAuthor);
        } catch (error) {
            res.status(500).json(error);
        }
        // res.status(200).json(req.body);
    },
    get_mongo:async(req,res)=>{
        try {
            const rate_get=await mongodb_rate.find();
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
const mysql_controll={
    insert_mysql:async(req,res)=>{
        try {
            mysql_rate.get_all(function(data){
                res.send({result: data});
            })  
              
        } catch (error) {
            
        }
    },
    select_id_mysql:async(req,res)=>{
        try {
            mysql_rate.getby_id(req.params.id_user,function(data){
                    res.send({result: data});
                });
              
        } catch (error) {
            
        }
    },
    insert_test_mysql:async(req,res)=>{
        try {
            var data=mysql_rate.get_all2(req.params.id_user)
                res.send({result: data});
                  
        } catch (error) {
            
        }
    },
    insert_test_mysql2:async(req,res)=>{
        try {
           var data=req.body;
           mysql_rate.create_mysql(data,function(response){
            res.send({result: response});
            });      
        } catch (error) {
            
        }
    },
    remove_mysql:async(req,res)=>{
        try {
           var id=req.params.id;
           mysql_rate.remove_mysql(id,function(response){
            res.send({result: response});
            });      
        } catch (error) {
            
        }
    }, 
    update_mysql:async(req,res)=>{
        try {
            var data=req.body;
            mysql_rate.update_mysql(data,function(response){
            res.send({result: response});
            });      
        } catch (error) {
            
        }
    },
};

const postgressql_controll={
    insert_postgres:async(req,res)=>{
        try {
            postgres_rate.get_all(function(data){
                res.send({result: data.rows});
            })  
              
        } catch (error) {
            
        }
    },
    select_id_postgres:async(req,res)=>{
        try {
            postgres_rate.getby_id(req.params.id_user,function(data){
                    res.send({result: data});
                });
              
        } catch (error) {
            
        }
    },
    insert_test_postgres:async(req,res)=>{
        try {
            var data=postgres_rate.get_all2(req.params.id_user)
                res.send({result: data});
                  
        } catch (error) {
            
        }
    },
    insert_test_postgres2:async(req,res)=>{
        try {
           var data=req.body;
           postgres_rate.create_postgres(data,function(response){
            res.send({result: response});
            });      
        } catch (error) {
            
        }
    },
    remove_postgres:async(req,res)=>{
        try {
           var id=req.params.id;
           postgres_rate.remove_postgres(id,function(response){
            res.send({result: response});
            });      
        } catch (error) {
            
        }
    }, 
    update_postgres:async(req,res)=>{
        try {
            var data=req.body;
            postgres_rate.update_postgres(data,function(response){
            res.send({result: response});
            });      
        } catch (error) {
            
        }
    },
}
module.exports={mongodb_controll,mysql_controll,postgressql_controll};
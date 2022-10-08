const {rate_table,Rate_table_mysql}=require("../model/model");
const authorController={
    insert_mongo:async(req,res)=>{
        try {
              const newrate=new rate_table(req.body);
             const saveAuthor=await newrate.save();
             res.status(200).json(saveAuthor);
        } catch (error) {
            res.status(500).json(error);
        }
        // res.status(200).json(req.body);
    },
    get_mongo:async(req,res)=>{
        try {
            const rate_get=await rate_table.find();
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    insert_mysql:async(req,res)=>{
        try {
                 Rate_table_mysql.get_all(function(data){
                res.send({result: data});
            })  
              
        } catch (error) {
            
        }
    },
    insert_test_mysql:async(req,res)=>{
        try {
            var data=Rate_table_mysql.get_all2(req.params.id_user)
                res.send({result: data});
                  
        } catch (error) {
            
        }
    },
    insert_test_mysql2:async(req,res)=>{
        try {
           var data=req.body;
           Rate_table_mysql.create(data,function(response){
            res.send({result: response});
            });      
        } catch (error) {
            
        }
    },
    remove_mysql:async(req,res)=>{
        try {
           var id=req.params.id;
           Rate_table_mysql.remove(id,function(response){
            res.send({result: response});
            });      
        } catch (error) {
            
        }
    },

    
};

module.exports=authorController;
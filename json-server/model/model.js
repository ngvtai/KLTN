

// const db=require('../config/config');
//mongo_db
const { Timestamp } = require("mongodb");
const mongoose=require("mongoose");
const rate_tables=new mongoose.Schema({
    name_user:{
        type:String ,
    },
    id_user:{
        type:String ,
        
    },
    id_chucnang:{
        type:String ,
       
    },
    name_chucnang:{
        type:String ,
      
    },
    rate_text:[{
        type:String,
    }],
    rate_text_name:[{
        type:String,
    }]
    ,   rate_value:[{
        type: String,
    }],
    rate_value_name:[{
        type:String,
    }]
})
let rate_table=mongoose.model("Rate",rate_tables);

const Rate_table_mysql=function(rate){
    this.name_user=rate.name_user;
    this.id_user=rate.id_user;
    this.id_chucnang=rate.id_chucnang;
    this.name_chucnang=rate.name_chucnang;
    this.rate_text=rate.rate_text;
    this.rate_text_name=rate.rate_text_name;
    this.rate_value=rate.rate_value;
    this.rate_value_name=rate.rate_value_name;
}


    Rate_table_mysql.get_all=function(result){
        var data=[
            {
                name_user:"noname",
                id_user:"1",
                id_chucnang:"1",
                name_chucnang:"test", 
                rate_text: [{0:"hello",1:"ssss"}],
                rate_text_name:[{0:"1",1:"2"}],
                rate_value: [{0:"hello",1:"ssss"}],
                rate_value_name:[{0:"1",1:"2"}],
             }
        ];
        result(data);
    // db.query("Select * from rate ",(err,result)=>{
    //             if(err) throw err;
    //             console.log(result);
               
    //         });

    }
    //cach 2 
    Rate_table_mysql.get_all2=function(id_user){
        var data=[
            {
                name_user:"noname",
                "id_user": ""+id_user+"",
                id_chucnang:"1",
                name_chucnang:"test", 
                rate_text: [{0:"hello",1:"ssss"}],
                rate_text_name:[{0:"1",1:"2"}],
                rate_value: [{0:"hello",1:"ssss"}],
                rate_value_name:[{0:"1",1:"2"}],
             }
        ];
       return data;
    }
    Rate_table_mysql.create_mysql=function(data,resfult){
        resfult(data);
    }
    ,Rate_table_mysql.remove_mysql=function(id,resfult){
        resfult("xoa thanh " +id+" cong");
    }

module.exports={rate_table,Rate_table_mysql};
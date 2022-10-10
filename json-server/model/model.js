const {mysqlconnet,mongodbconnet,postgresconnet}= require('../config/config');
//mongo_db
const { Timestamp } = require("mongodb");
const mongoose=require("mongoose");
//cấu trúc dữ liệu mongodb
const mongo_rate=new mongoose.Schema({
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
let mongodb_rate=mongoose.model("Rate",mongo_rate);
//mysql
const mysql_rate=function(rate){
    this.name_user =rate.name_user;
    this.id_user =rate.id_user;
    this.id_chucnang =rate.id_chucnang;
    this.name_chucnang =rate.name_chucnang;
    this.rate_text ="'["+rate.rate_text+"]'";
    this.rate_text_name ="'["+rate.rate_text_name+"]'";
    this.rate_value ="'["+rate.rate_value+"]'";
    this.rate_value_name ="'["+rate.rate_value_name+"]'";
}
mysql_rate.get_all=function(restful){
    mysqlconnet.query("SELECT * FROM rate", function(err,mysql_rate){
        if(err||mysql_rate.lenght==0 )
        {
            restful(null);
            console.log(err);
        }else {
            restful(mysql_rate);
        }
    });
 }

mysql_rate.get_all2=function(id_user){
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
mysql_rate.getby_id=function(id_user,restful)
{
    mysqlconnet.query("SELECT * FROM rate where id_user = ?",id_user, function(err,mysql_rate){
        if(err||mysql_rate.lenght==0 )
        {
            restful(null);
            console.log(err);
        }else {
            restful(mysql_rate);
        }
    });
}
mysql_rate.create_mysql=function(data,restful){
    mysqlconnet.query("insert into rate set ?",data, function(err,mysql_rate){
        if(err)
        {   
            restful(null);
            console.log(err);
        }else { 
            restful({id_user:mysql_rate.insertId,...data});
        }
    });
}
,mysql_rate.remove_mysql=function(id,restful){
    mysqlconnet.query("DELETE FROM rate where id_user = ?",id, function(err,mysql_rate){
        if(err||mysql_rate.lenght==0 )
        {
            restful(null);
            console.log(err);
        }else {
            restful("xoa du lieu thanh cong");
        }
    });
},mysql_rate.update_mysql=function(value,restful){
    mysqlconnet.query("UPDATE  rate SET name_user = ?,rate_text= ? WHERE id_user=?",[value.name_user,value.rate_text,value.id_user], function(err,mysql_rate){
        if(err||mysql_rate.lenght==0 )
        {
            restful(null);
            console.log(err);
        }else {
            restful("cap nhat du lieu thanh cong");
        }
    });
}
//posgressql
const postgres_rate=function(rate){
    this.name_user =rate.name_user;
    this.id_user =rate.id_user;
    this.id_chucnang =rate.id_chucnang;
    this.name_chucnang =rate.name_chucnang;
    this.rate_text ="'["+rate.rate_text+"]'";
    this.rate_text_name ="'["+rate.rate_text_name+"]'";
    this.rate_value ="'["+rate.rate_value+"]'";
    this.rate_value_name ="'["+rate.rate_value_name+"]'";
}
postgres_rate.get_all=function(restful){
    postgresconnet.query("SELECT * FROM rate", function(err,postgres_rate){
        if(err||postgres_rate.lenght==0)
        {
            restful(null);
            console.log(err);
        }else{
            restful(postgres_rate);
        }
    });
 }

 postgres_rate.get_all2=function(id_user){
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
postgres_rate.getby_id=function(id_user,restful)
{
    postgresconnet.query("SELECT * FROM rate where id_user = ?",id_user, function(err,postgres_rate){
        if(err||postgres_rate.lenght==0 )
        {
            restful(null);
            console.log(err);
        }else {
            restful(postgres_rate);
        }
    });
}
postgres_rate.create_postgres=function(data,restful){
    postgresconnet.query("insert into rate set ?",data, function(err,postgres_rate){
        if(err)
        {   
            restful(null);
            console.log(err);
        }else { 
            restful({id_user:postgres_rate.insertId,...data});
        }
    });
}
,postgres_rate.remove_postgres=function(id,restful){
    postgresconnet.query("DELETE FROM rate where id_user = ?",id, function(err,postgres_rate){
        if(err||postgres_rate.lenght==0 )
        {
            restful(null);
            console.log(err);
        }else {
            restful("xoa du lieu thanh cong");
        }
    });
},postgres_rate.update_postgres=function(value,restful){
    postgresconnet.query("UPDATE  rate SET name_user = ?,rate_text= ? WHERE id_user=?",[value.name_user,value.rate_text,value.id_user], function(err,postgres_rate){
        if(err||postgres_rate.lenght==0 )
        {
            restful(null);
            console.log(err);
        }else {
            restful("cap nhat du lieu thanh cong");
        }
    });
}





    module.exports={mongodb_rate,mysql_rate,postgres_rate};
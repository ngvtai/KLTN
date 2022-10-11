const {mysqlconnet,mongodbconnet,postgresconnet}= require('../config/config');
const mongoose=require("mongoose");
const mongo_user=new mongoose.Schema({
    id:{
        type:String,
    },
    name_user:{
        type:String,
       
    },
    password:{
        type:String,
    }
})
let mongodb_user=mongoose.model("User",mongo_user);
//mysql
const mysql_user=function(users){
    this.id=users.id,
    this.name_user=users.name_user,
    this.password=users.password
};
mysql_user.check_login_mysql=function(data,restful)
{
    c
    mysqlconnet.query("SELECT * FROM userS where name_user = ? AND password= ?",[data.name_user,data.password], function(err,mysql_rate){
        if(err||mysql_user.lenght==0 )
        {
            restful(null);
            console.log(err);
        }else {
            restful(mysql_user);
        }
    });
}
// postgress
const postgress_user=function(users){
    this.id=users.id,
    this.name_user=users.name_user,
    this.password=users.password
};

postgress_user.check_login_postgress=function(data,restful)
{
    postgresconnet.query(`SELECT * FROM public.users where public.users.name_user = '`+data.name_user+`'
    AND public.users.password='`+data.password+`'`, function(err,postgress_user){
    // postgresconnet.query(`SELECT * FROM public.users where public.users.name_user = '?' 
    // AND public.users.password='?'`, [data.name_user , data.password], function(err,postgress_user){
        if(err||postgress_user.lenght==0)
        {
            restful(null);
            console.log(err);
        }else {
            restful(postgress_user);
        }
    });
}
module.exports={mongodb_user,mysql_user,postgress_user};
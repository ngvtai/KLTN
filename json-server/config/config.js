const mysql=require("mysql");
const pool=require("pg").Pool();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
dotenv.config();
const pgp = require('pg-promise')(/* options */);
var mysqlconnet;
var mongodbconnet;
var postgresconnet;
if(process.env.MYSQL_HOST!="")
{
    console.log(process.env.MYSQL_HOST+" "+process.env.MYSQL_USER+" "+process.env.MYSQL_NAME);
    mysqlconnet=mysql.createConnection(
        {
            host: process.env.MYSQL_HOST,    
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: process.env.MYSQL_NAME
        }
    );
    mysqlconnet.connect((err)=>{
        if(err)
        {
            console.log(err);
        }
        else {
             console.log("conneting mysql");
        }
    });   
} 
else if(process.env.MONGODB_URL!="")
{
    mongodbconnet=mongoose.connect(process.env.MONGODB_URL,()=>{
        console.log("conneting mongodb");
       });
}else if(process.env.POSTGRES_URL!="")
{
     postgresconnet = new pool({
        user:"postgres",
        host:"localhost",
        database:"test",
        password:"123",
        port:5432
     })
}
module.exports= {mysqlconnet,mongodbconnet,postgresconnet};
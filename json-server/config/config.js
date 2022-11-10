const mysql=require("mysql");
const pool=require("pg").Pool;
const dotenv=require("dotenv");
const mongoose=require("mongoose");
dotenv.config();
const pgp = require('pg-promise')(/* options */);
// var mysqlconnet;
var mongodbconnet;

if(process.env.MONGODB_URL!="")
{
    mongodbconnet=mongoose.connect(process.env.MONGODB_URL,()=>{
        console.log("conneting mongodb");
       });
}
// var postgresconnet;
// if(process.env.MYSQL_HOST!="")
// {
//     console.log(process.env.MYSQL_HOST+" "+process.env.MYSQL_USER+" "+process.env.MYSQL_NAME);
//     mysqlconnet=mysql.createConnection(
//         {
//             host: process.env.MYSQL_HOST,    
//             user: process.env.MYSQL_USER,
//             password: process.env.MYSQL_PASS,
//             database: process.env.MYSQL_NAME
//         }
//     );
//     mysqlconnet.connect((err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else {
//              console.log("conneting mysql");
//         }
//     });   
// } 
// else if(process.env.MONGODB_URL!="")
// {
//     mongodbconnet=mongoose.connect(process.env.MONGODB_URL,()=>{
//         console.log("conneting mongodb");
//        });
// }else if(process.env.POSTGRES_URL!="")
// {
//      postgresconnet = new pool({
//         user:process.env.POSTGRES_USER,
//         host:process.env.POSTGRES_URL,
//         database: process.env.POSTGRES_DATABASE,
//         password:process.env.POSTGRES_PASS,
//         port:5432
//      })
//      postgresconnet.connect((err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else {
//              console.log("conneting postgressql");
//         }
//      });
// }
module.exports= {mongodbconnet};
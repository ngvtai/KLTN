const mysql=require("mysql");
const dotenv=require("dotenv");

if(process.env.DB_HOST!="")
{   console.log('hello');
    const mysqlconnet=mysql.createConnection(
        {
            host: process.env.DB_HOST|| 'localhost',    
            user: process.env.DB_USER||'root',
            password: process.env.DB_PASS||'',
            database: process.env.DB_NAME||'test'
        }
    );
    mysqlconnet.connect((err)=>{
        if(err)
        {
            console.log(err);
        }
        else {
             console.log("ket noi thanh cong mysql");
        }
    })
    // app.get("/createtable",(req,res)=>{
    //     let sql='insert into abc';
    //     mysqlconnet.query(sql,(err,result)=>{
    //         if(err) throw err;
    //         console.log(result);
    //         res.send("comp");
    //     })
    // } )
    // app.get("/insertdb",(req,res)=>{
       
    //     let post={
    //         title:"body",body:"sss"
    //     }
    //     let sql='insert into abc ?';
    //     mysqlconnet.query(sql,post,(err,result)=>{
    //         if(err) throw err;
    //         console.log(result);
    //         res.send("comp");
    //     })
    // } )
}
module.exports= mysqlconnet;
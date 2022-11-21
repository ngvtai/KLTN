const express=require('express');
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
var BodyParser=require("body-parser");
const morgan=require("morgan");
const dotenv=require("dotenv");
const index=require("./router/index.router");
const user=require("./router/account.router");
const login=require("./router/login.router");
const homelogin=require("./router/home.router");
const middleware=require("./JWT/middleware");
app.use(BodyParser.json({limit:"50mb"}));
app.use(cors()); 
app.use(morgan("common"));
dotenv.config();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Request-With,Content-Type,Accept');
    next();
});
app.use("/api",login);

// app.use("/",homelogin);

app.use(middleware.isAuth);

app.use("/api",user);

app.use("/api",index);


app.listen(8000,()=>{
    console.log("server running localhost 8000");
})
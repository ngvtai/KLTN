const express=require('express');
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
var BodyParser=require("body-parser");
const morgan=require("morgan");
const dotenv=require("dotenv");
const index=require("./router/index.router");

const users=require("./router/login.router");
const homelogin=require("./router/home.router");
const middleware=require("./JWT/middleware");
app.use(BodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));
dotenv.config();

app.use("/",users);
// app.use("/",homelogin);

// app.use(middleware.isAuth);

app.use("/",index);


app.listen(8000,()=>{
    console.log("server running localhost 8000");
})
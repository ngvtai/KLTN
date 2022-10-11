const express=require('express');
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
var BodyParser=require("body-parser");
const morgan=require("morgan");
const dotenv=require("dotenv");
const authorRoute=require("./router/index.router");

const login_user=require("./router/login.router");
const homelogin=require("./router/home.router");
const middleware=require("./JWT/middleware");
app.use(BodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));
dotenv.config();

app.use("/",login_user);
app.use("/",homelogin);
app.use(middleware.isAuth);
app.use("/",authorRoute);


app.listen(8000,()=>{
    console.log("server running localhost 8000");
})
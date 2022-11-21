const {mongodbconnet}= require('../config/config');
const mongoose=require("mongoose");
const NguoiQT=new mongoose.Schema({
    idQT:{type:Number,},
    tenQT:{type:String},
    username:{type:String},
    password:{type:String},
    Hethong:{
        ma:{type:String},
        tenHT:{type:String}
    },
    Vaitro:{
        idVT:{type:Number},
        tenVT:{type:String}
    }
})
const VaiTro=new mongoose.Schema({
    idVT:{type:Number},
    tenVT:{type:String}
})

let mongodb_user=mongoose.model("NguoiQT",NguoiQT);
let vaitro=mongoose.model("VaiTro",VaiTro);

module.exports={mongodb_user,vaitro};
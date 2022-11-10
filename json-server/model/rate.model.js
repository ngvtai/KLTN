const {mongodbconnet}= require('../config/config');
const { Timestamp, Int32 } = require("mongodb");
const mongoose=require("mongoose");
const { number, init } = require('echarts');
const mongoRate=new mongoose.Schema({
    maCN:{type:String},
    TenCN:{type:String},
    page: {type:Number},    
    count: {type:Number},   
    MucDich:{type: String},
    Danhgia:[{
        MaDG:{type: String},
        date:{type: Date},
        nguoiDG:[{
            maNGDG:{type:Number},
            TenNGDG:{type:String},   
            id_user:{type:String} 
        }],
        CTDGI:[{    
            maDGI:{type:Number},    
            tenDGI:{type:String},    
            KQDGI:{type:Number}
        }],
        CTDGC:[{   
            maDGI:{type:Number},    
            tenDGI:{type:String},   
            KQDGI:{type:String}   
        }]

    }]
})
const HeThong=new mongoose.Schema({
    ma:{type:String},
    tenHT: {type:String}
});
let mongodb_rate=mongoose.model("Rate",mongoRate);
let hethong=mongoose.model("Hethong",HeThong);

    module.exports={mongodb_rate,hethong};
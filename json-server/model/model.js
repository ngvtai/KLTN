const mongoose=require("mongoose");

const rate_tables=new mongoose.Schema({
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
let rate_table=mongoose.model("Rate",rate_tables);

module.exports={rate_table};
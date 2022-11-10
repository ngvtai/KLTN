const {mongodb_rate,hethong}=require("../model/rate.model");

const mongodb_controll={
    sendrate:async(req,res)=>{
        try {
                const newrate=new mongodb_rate(req.body);
                
                const getvalue=await mongodb_rate.find({maHT:req.body.maHT});
                if(getvalue=="")
                {
             
                }else{

                }
                //  const saveAuthor=await newrate.save();
                 res.status(200).json(getvalue);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    insertsystem:async(req,res)=>{
        try {
              const newrate=new hethong(req.body);
             const saveAuthor=await newrate.save();
             res.status(200).json(saveAuthor);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getrate:async(req,res)=>{
        try {
            const rate_get=await mongodb_rate.find();
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
module.exports={mongodb_controll};
const {rate_table}=require("../model/model");
const authorController={
    addAuthor:async(req,res)=>{
        try {
            const newrate=new rate_table(req.body);
             const saveAuthor=await newrate.save();
             res.status(200).json(saveAuthor);

        } catch (error) {
            res.status(500).json(error);
        }
        // res.status(200).json(req.body);
    },
    getrate:async(req,res)=>{
        try {
            const rate_get=await rate_table.find();
            res.status(200).json(rate_get);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
module.exports=authorController;
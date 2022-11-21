const {mongodb_rate,hethong}=require("../model/rate.model");

const mongodb_controll={
    sendrate:async(req,res)=>{
        try {
                const newrate=new mongodb_rate(req.body);
                const getvalue=await mongodb_rate.find({maCN:req.body.maCN,maHT:req.body.maHT},function(err){
                    if(err)
                    {
                        res.json({kq:0,"err":"error not find"})
                    }
                });
                if(getvalue=="")
                {
                    res.json({kq:0});
                }else{
                    const saverate=await newrate.findOneAndUpdate({maCN:req.body.maCN,maHT:req.body.maHT},
                        {$push:{Danhgia:req.body.Danhgia}},function(err){
                            if(err)
                            {
                                res.json({kq:0,"err":"loi khong them du lieu duoc"})
                            }
                            else{
                                res.json({kq:1});
                                res.status(200).json(saverate);
                            }
                        })
                    //   const saveAuthor=await newrate.save(function(err)
                    //   {
                    //     if(err)
                    //     {
                    //         res.json({kq:0,"save":"save error"});
                    //     }
                        
                    //   });
                } 
        } catch (error) {
            res.status(500).json(error);
        }
    },
    insertsystem:async(req,res)=>{
        try {
              const newrate=new hethong(req.body);
             const saveAuthor=await newrate.save(function(err){
             });
             res.status(200).json(1);
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
    },deletesys:async(req,res)=>{
        try {
            const getuser=await hethong.deleteMany({ma:req.body.ma});
            res.status(200).json(1);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    changesys:async(req,res)=>{
        try {
            const insert_d=new  hethong(req.body);
            console.log(insert_d);
            const returne=await insert_d.updateOne({ma:req.body.ma},
                {$set:req.body
            });
            res.status(200).json(1);
          } catch (error) {
              res.status(500).json(error);
          }
    },
    checksys:async(req,res)=>{
        try {
            const getuser=await hethong.find({ma:req.body.ma},{ tenHT: 1});
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getinforsys:async(req,res)=>{
        try {
            const getuser=await hethong.find({ma:req.body.ma},{ma:1, tenHT: 1});
            res.status(200).json(getuser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
module.exports={mongodb_controll};
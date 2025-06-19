const Page = require("../models/Newpage");

const createPage = async (req,res) => {
  const { title, image, description, date, shotDescription,slug}=req.body

try {
      const data = new Page({title, image, description, date, shotDescription,slug});
  await data.save();
  res.status(200).json({
    success: true,
    message: "Page created successfully",
    data,
  });
} catch (error) {
    res.status(400).json({
    success: false,
    message: "Page not created",
    error,
  });
}
};

const getPage=async(req,res)=>{
    try {
        const data=await Page.find()
        res.status(200).json({
            success:true,
            message:"Page fetched successfully",
            data
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Page not fetched",
            error
        })
    }
}
const deletePage=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await Page.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"Page deleted successfully",
            data
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Page not deleted",
            error
        })
    }
}
module.exports={createPage,getPage,deletePage}
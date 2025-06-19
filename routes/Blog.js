const express=require("express")
const router=express.Router()
const {createBlog,getBlog,deleteBlog}=require("../controllers/Blog")
router.post("/create-blog",createBlog)
router.get("/get-blog",getBlog)
router.delete("/delete-blog/:id",deleteBlog)
module.exports=router
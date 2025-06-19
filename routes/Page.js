const express=require("express")
const router=express.Router()
const {createPage,getPage,deletePage}=require("../controllers/Page")
router.post("/create-Page",createPage)
router.get("/get-Page",getPage)
router.delete("/delete-Page/:id",deletePage)
module.exports=router
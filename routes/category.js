const express=require("express")
const { createCategory, getCategory, delteCategory } = require("../controllers/Category")
const router=express.Router()

router.post("/create-category",createCategory)
router.get("/get-category",getCategory)
router.delete("/delete-category/:id",delteCategory)


module.exports=router
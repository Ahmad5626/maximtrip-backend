const express=require("express")
const router=express.Router()
const {createDestination,getDestination,deleteDestination}=require("../controllers/Destination")
router.post("/create-destination",createDestination)
router.get("/get-destination",getDestination)
router.delete("/delete-destination/:id",deleteDestination)
module.exports=router
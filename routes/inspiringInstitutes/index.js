const express = require("express");
const router = express.Router();

const {createInspiringInstitutes, getAllInspiringInstitutes, updateInspiringInstitutes, deleteInspiringInstitutes} = require('../../controllers/inspiringInstitutes/index')

router.post("/create-inspiring-institutes", createInspiringInstitutes);
router.get("/get-inspiring-institutes", getAllInspiringInstitutes);
router.put("/update-inspiring-institutes", updateInspiringInstitutes);
router.delete("/delete-inspiring-institutes", deleteInspiringInstitutes);

module.exports = router
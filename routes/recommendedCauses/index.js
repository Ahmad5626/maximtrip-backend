const express = require("express");
const { createRecommendedCauses, getAllRecommendedCauses, deleteRecommendedCauses } = require("../../controllers/recommendedCauses");
const router = express.Router();


router.post("/create-recommended-couses", createRecommendedCauses);
router.get("/get-recommended-couses", getAllRecommendedCauses);

router.delete("/delete-recommended-couses/:id", deleteRecommendedCauses);

module.exports = router
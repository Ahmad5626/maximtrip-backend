const express =require('express');
const router = express.Router();
const { CreateAllbuttons, getAllbuttons, updatebutton } = require('../../controllers/buttons/index');



router.post("/create-all-buttons", CreateAllbuttons);
router.get("/get-all-buttons", getAllbuttons);
router.put("/update-all-buttons", updatebutton);


module.exports = router
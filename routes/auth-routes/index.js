const express = require('express');
const router = express.Router();

const { registerUser, loginUser, googleLogin, updateUser, getUsers, deleteUser } = require('../../controllers/auth-controller/index');
const { authenticate } = require('../../middleware/auth-middleware');

router.post('/register', registerUser)
router.post('/login', loginUser)
router.put('/update-user', authenticate, updateUser)
router.get('/get-user-data', getUsers)
router.delete('/delete-user/:id', deleteUser)
// router.post("/google-login", googleLogin);

router.get("/check-auth", authenticate, (req, res) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    data: {
      user,
    },
  });
});   
module.exports = router
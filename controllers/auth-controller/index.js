const User = require("../../models/User");
// const { OAuth2Client } = require("google-auth-library");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  try {
    const { userName, userEmail, password, RegisteredType } = req.body;
    if (!userName || !userEmail || !password ) {
      return res.status(400).send("All fields are required");
    }
    const userExists = await User.findOne({
      $or: [{ userEmail }, { userName }],
    });
    if (userExists) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      userEmail,
      password: hashedPassword,
      RegisteredType,
      
    });

    await newUser.save();
    return res.status(200).json({
      success: true,
      newUser,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(400).send("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid password");
    }

    const token = jwt.sign(
      {
        id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2000m",
      }
    );
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",

      data: {
        token,
        user: {
          _id: user._id,
          userName: user.userName,
          userEmail: user.userEmail,
          role: user.role,
        },
      },
    });
  } catch (error) {}
};

const updateUser = async (req, res) => {
  const { id } = req.user;
const { Gender, dateOfBirth, State, Address, Pincode, maritalStatus, mobileNumber, District, PANCardNo, } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        Gender,
        dateOfBirth,
        State,
        Address,
        Pincode,
        maritalStatus,
        mobileNumber,
        District,
        PANCardNo,
      },
      { new: true ,runValidators: true}
    );
    
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update user",
      error: error.message,
    });
  }
};



const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};


const deleteUser=async(req,res)=>{
  const id=req.params.id
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error: error.message,
    });
  }
}

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// const googleLogin = async (req, res) => {
//   const { credential } = req.body;

//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: credential,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     const { email, name, picture, sub } = payload;

//     // You can create or find user in DB here
//     const user = {
//       id: sub,
//       email,
//       name,
//       picture,
//     };

//     // Create JWT token
//     const  token = jwt.sign(user, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res.json({ token, user });
//   } catch (err) {
//     console.error("Google login error:", err);
//     res.status(400).json({ message: "Google login failed" });
//   }
// };
module.exports = { registerUser, loginUser,updateUser,getUsers,deleteUser };


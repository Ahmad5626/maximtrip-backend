const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // Save in this folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // e.g., 123456789.png
  },
});
const upload = multer({ storage });

// Route to handle file upload
router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  const fileUrl = `${req.protocol}://${req.get("host")}/images/${file.filename}`;

  res.status(200).json({
    success: true,
    message: "File uploaded successfully",
    fileUrl,
  });
});


module.exports = router;
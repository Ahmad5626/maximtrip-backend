require('dotenv').config();
const express = require('express');
const path = require("path");
const app = express();
const cors = require('cors');
const allowedOrigins = [
  process.env.CLIENT_URL, // e.g., http://localhost:3000
  process.env.ADMIN_URL    // e.g., http://localhost:3001
];
const port = process.env.PORT || 3000;
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true ,limit: '50mb' }));


// db connection
const connectDB = require('./config/db');
const { connection } = require('mongoose');
const authRoute = require('./routes/auth-routes');
const campaignRoute = require('./routes/campaign');
connectDB();

// Serve static images
app.use("/images", express.static(path.join(__dirname, "public/images")));
// Use the upload route
const uploadRoutes = require("./routes/upload");
app.use("/api", uploadRoutes);

// route configration
app.use("/auth", authRoute);
app.use("/v1/api", campaignRoute);



app.use((error,req,res,next)=>{
console.log(error);
res.status(500).send(error.message);

})
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// app.use(cors(corsOptions));
// 
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
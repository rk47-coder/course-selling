import express from 'express'
import dotenv from "dotenv";
import { v2 as cloudinary } from 'cloudinary';
import mongoose from "mongoose";
import courseRoute from "./routes/course.route.js";
import userRoute from "./routes/user.route.js";
import adminRoute from "./routes/admin.route.js"
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import cors from "cors";
const app = express()
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

const port = process.env.PORT ||3000
const  DB_URL = process.env.MONGO_URL;


// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Ensure this is the correct frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


try{
 await mongoose.connect(DB_URL,  {
   
});
  console.log("connection done");
} catch(error){
    console.log(error);
}


app.use('/api/vi/course', courseRoute);
app.use('/api/vi/user', userRoute);
app.use("/api/vi/admin", adminRoute);



    // Configuration
    cloudinary.config({ 
      cloud_name: process.env.cloud_name,
      api_key: process.env.api_key,
      api_secret: process.env.api_secret,
  });

app.listen(port, () => {
  console.log(`server is runnig  on port ${port}`)
})
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
   app.use(cors());
   app.use(bodyParser.json());

// MongoDB connection
 mongoose
   .connect(process.env.MONGO_URI, {
       useNewUrlParser: true,
           useUnifiedTopology: true,
             })
               .then(() => console.log("✅ MongoDB connected"))
                 .catch((err) => console.error("❌ MongoDB error:", err));

//                 // Routes
                 import contactRoutes from "./routes/contactRoutes.js";
                 app.use("/api/contact", contactRoutes);

                 app.listen(PORT, () => {
                   console.log(`🚀 Server running on http://localhost:${PORT}`);
                   });
//

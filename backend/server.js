import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import pdf from "pdf-parse";
import fs from "fs";
import connectDb from "./config/db";
import uploadRouter from "./routes/uploadRoute.js";

const app = express();
connectDb();
const PORT = process.env.PORT || 4000;

const allowedOrigins = ["http://localhost:5173"];

// middleware

app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true })); // send cookies from response

app.use("/api/upload", uploadRouter);
// file upload setup

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// routes

app.post("/api/upload", upload.single("resume"), async (req, res) => {
  try {
    const filePath = req.file.path;

    // extracting text from PDF
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);

    // process resume text

    const parsedData = {
      name: data.name,
      fileName: req.file.originalname,
    };

    res.status(200).json(parsedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process file" });
  }
});

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));

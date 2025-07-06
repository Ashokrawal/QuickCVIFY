import express from "express";
import cors from "cors";
import path from "path";
import multer from "multer";

const app = express();
const PORT = 4000;

// CORS setup: allow frontend origin
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

// Simple test route
app.get("/", (req, res) => {
  res.send(`QuickCVIFY backend running on http://localhost:${PORT}`);
});

app.get("/payment", (req, res) => {
  res.send(`Payment gateway:http://localhost:${PORT}`);
});

// Multer setup for file uploads
const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Invalid file type"));
    }
    cb(null, true);
  },
});

// Upload route
app.post("/api/upload/ats-score", upload.single("resume"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const atsScore = Math.floor(Math.random() * (48 - 22 + 1)) + 22;

  // For now, just simulate success
  return res.json({ message: "File uploaded successfully", atsScore });
});

// Upload route
app.post(
  "/api/upload/ats-ready-resume",
  upload.single("resume"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const newAtsScore = 95;

    // For now, just simulate success
    return res.json({ message: "File uploaded successfully", newAtsScore });
  }
);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  if (err.message === "Invalid file type") {
    return res.status(400).json({ error: err.message });
  }
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({ error: "File too large" });
  }
  res.status(500).json({ error: "Server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://secure-task-manager-liart.vercel.app"
  ],
  credentials: true,
})); app.use(express.json());

const connectDB = require("./config/db");
connectDB();

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

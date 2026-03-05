const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");
app.use(cors()); 
app.use(express.json()); 

const connectDB = require("./config/db");
connectDB();  

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks",taskRoutes);
const PORT = process.env.PORT || 5000;
app.use(
  express.static(
    path.join(__dirname, "..", "Front End","build")
  )
);

app.use((req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "..",
      "Front End",
      "build",
      "index.html"
    )
  );
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

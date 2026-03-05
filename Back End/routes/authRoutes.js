const express = require("express");
const router = express.Router();
const { registerUser,loginUser,getProfile,updateProfile,forgotPassword,resetPassword} = require("../controllers/authcontroller");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/test", (req, res) => {
  res.send("Auth route working");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile",authMiddleware,getProfile);
router.put("/profile",authMiddleware,updateProfile);
router.post("/forgot",forgotPassword);
router.post("/reset/:token",resetPassword);


module.exports = router;

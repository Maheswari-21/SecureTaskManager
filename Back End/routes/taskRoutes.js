const  express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {createTasks,getMyTasks,updateTasks,deleteTasks,} = require("../controllers/taskController");


router.use(auth);
router.post("/create",createTasks);
router.get("/get",getMyTasks);
router.put("/update/:id",updateTasks);
router.delete("/delete/:id",deleteTasks);
module.exports = router;
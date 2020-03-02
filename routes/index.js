const router = require("express").Router();
const controller = require("../controllers/bookController")


// API Routes
router.get("/", controller.findAll);
router.post("/", controller.create);
router.get("/:id", controller.findOne);
router.delete("/:id", controller.remove);

module.exports = router;

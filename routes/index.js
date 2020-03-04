const router = require("express").Router();
const controller = require("../controllers/bookController")


// API Routes
router.get("/api/books", controller.findAll);
router.post("/api/books", controller.create);
router.get("/api/books/:id", controller.findOne);
router.delete("/api/books/:id", controller.remove);

module.exports = router;


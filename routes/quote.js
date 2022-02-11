const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/quotes", controllers.quote_ctrl.quoteIndex);

module.exports = router;
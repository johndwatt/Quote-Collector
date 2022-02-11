const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/quotes", controllers.quote_ctrl.quoteIndex);
router.get("/quotes/:id", controllers.quote_ctrl.quoteShow);
router.get("/quotes/:id/edit", controllers.quote_ctrl.quoteUpdate);

module.exports = router;
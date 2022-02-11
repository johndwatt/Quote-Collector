const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/quotes", controllers.quote_ctrl.quoteIndex);
router.get("/quotes/:id", controllers.quote_ctrl.quoteShow);
router.post("/quotes", controllers.quote_ctrl.quoteCreate);
router.put("/quotes/:id", controllers.quote_ctrl.quoteUpdate);
router.delete("/quotes/:id", controllers.quote_ctrl.quoteDelete);

module.exports = router;
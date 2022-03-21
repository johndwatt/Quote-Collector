const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.post("/login", controllers.auth_ctrl.loginRoute);
router.post("/signup", controllers.auth_ctrl.signupRoute)

module.exports = router;
const router = require("express").Router();
const routines = require("./routines");

// Book routes
router.use("/routines", routines);

module.exports = router;

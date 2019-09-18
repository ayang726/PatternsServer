const router = require("express").Router();
const routines = require("./routines");
const practices = require("./practices");

// Book routes
router.use("/routines", routines);
router.use("/practices", practices);

module.exports = router;

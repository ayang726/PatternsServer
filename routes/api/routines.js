const router = require("express").Router();
const routineController = require("../../controller/routineController")


router.route("/")
    .post(routineController.create)
router.route("/:userId")
    .get(routineController.findAllByUser)
router.route("/:id")
    .put(routineController.update)
    .delete(routineController.delete)


module.exports = router;

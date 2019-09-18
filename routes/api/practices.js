const router = require("express").Router();
const practiceController = require("../../controller/practiceController")


router.route("/")
    .post(practiceController.create)
router.route("/:userId")
    .get(practiceController.findAllByUser)
router.route("/:id")
    .put(practiceController.update)
    .delete(practiceController.delete)


module.exports = router;

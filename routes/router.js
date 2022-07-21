const express = require("express")
const requestController = require("../controllers/userRequestController")
const router = express.Router()

router.route("/")
.post( requestController.postRequest )
.get( requestController.getRequest )
.patch( requestController.patchRequest )


router.route("/:status")
.get( requestController.getFilterRequest )


module.exports = router
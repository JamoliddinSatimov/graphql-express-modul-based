const express = require("express")

const router = express.Router()

const users = require("./users/module")


router.get("/", users.GET )

module.exports = router    
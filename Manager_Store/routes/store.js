const express = require("express");
const router = express.Router();

const controller = require("../controllers/store");

router.post("/add", controller);

module.exports = router;

const express = require("express");
const router = express.Router();

const controller = require("../controllers/contract");

router.put("/termination/:id", controller);

module.exports = router;

const express = require("express");
const { getData } = require("../controllers/data");

const router = express.Router();

router.get("/data", getData);

module.exports = router;

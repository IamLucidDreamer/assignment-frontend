const express = require("express");
const { getData, getSearchData } = require("../controllers/data");

const router = express.Router();

router.get("/data", getData);
router.get("/data/search", getSearchData);

module.exports = router;

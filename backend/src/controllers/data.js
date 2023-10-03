const { loggerUtil: logger } = require("../utils/logger");
const { statusCode: SC } = require("../utils/statusCode");

const stagesData = require("../constants/stagesData");

const getData = async (req, res) => {
  res.status(SC.OK).json({
    message: "Data Fetched Successfully",
    data: stagesData,
  });
};

module.exports = { getData };

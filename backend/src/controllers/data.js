const { loggerUtil: logger } = require("../utils/logger");
const { statusCode: SC } = require("../utils/statusCode");

const stagesData = require("../constants/stagesData");

const getData = async (req, res) => {
  const id = req.query.id;
  let data = [];
  if (id) {
    const stage = stagesData.find((stage) => stage.id == id);
    data = stage.children.map((stage) => ({
      ...stage,
      children: stage.children ? [] : undefined,
    }));
  } else {
    data = stagesData.map((stage) => ({
      ...stage,
      children: stage.children ? [] : undefined,
    }));
  }
  res.status(SC.OK).json({
    message: "Data Fetched Successfully",
    data: data,
  });
};

module.exports = { getData };

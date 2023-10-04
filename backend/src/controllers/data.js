const { loggerUtil: logger } = require("../utils/logger");
const { statusCode: SC } = require("../utils/statusCode");

const stagesData = require("../constants/stagesData");
const { findChildById, findDataByName } = require("../helpers/dataProcess");

const getData = async (req, res) => {
  const id = req.query.id;
  let data = [];
  if (id) {
    for (const value of stagesData) {
      const result = findChildById(value, id);
      if (result) {
        data.push(...result);
        break;
      }
    }
    data = data.map((stage) => ({
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

const getSearchData = async (req, res) => {
  const search = req.query.search;
  let data = [];
  if (!search) {
    res.status(SC.WRONG_ENTITY).json({
      message: "Pass Valid Search Data",
      status: SC.WRONG_ENTITY,
    });
  } else {
    data = findDataByName(stagesData, search);
    res.status(SC.OK).json({
      message: "Data Fetched Successfully",
      data: data,
    });
  }
};

module.exports = { getData, getSearchData };

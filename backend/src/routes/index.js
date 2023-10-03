const dataRoute = require("./data");

function routesV1(app) {
  app.get("/api/v1", (req, res) => res.json({ message: "Success" }));
  app.use("/api/v1", dataRoute);
}

module.exports = { routesV1 };

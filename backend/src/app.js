/**
 * @author Manas
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { loggerUtil: logger } = require("./utils/logger");
const { statusCode: SC } = require("./utils/statusCode");

const app = express();

const { routesV1 } = require("./routes/index");

const { validationResult } = require("express-validator");

//testing
app.get("/api/v1/test", (_, res) => {
  res.status(SC.OK).send("Server is Up and Running");
});

//validate req
app.use((req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(SC.WRONG_ENTITY).json({ error: errors.array() });
  }
  next();
});

//built-in middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

// Routes
routesV1(app);

const PORT = 8002;

app.listen(PORT, () => {
  logger(`Listening on port--------- ${PORT}`, "SERVER");
});

require("dotenv").config();
import express from "express";
import config from "config";

const app = express();

//JSON middleware
app.use(express.json());

import db from "../config/db";

//Logger
import Logger from "../config/loggers";

// Middleware

//Routes
import router from "./router";
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware);

app.use("/api/", router);

//pegando porta
const port = config.get<number>("port");
app.listen(port, async () => {
  await db();
  Logger.info(`Server running on port ${port}`);
});

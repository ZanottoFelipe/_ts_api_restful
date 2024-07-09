import mongoose from "mongoose";
import config from "config";
import Logger from "../config/loggers";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco com sucesso");
  } catch (e) {
    Logger.error("Não foi possível conectar ao banco");
    Logger.error(`Error: ${e}`);
    process.exit(1);
  }
}

export default connect;

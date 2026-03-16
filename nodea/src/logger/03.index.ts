import { FactoryLogger } from "./02-loggerFactory";
import { Logger } from "./01-logger";

const loggerFile = FactoryLogger.createLogger("file");

loggerFile.log("este es mensaje de file");

Logger.instance.getlog();

import { FactoryLogger } from "./02-loggerFactory";
import { Logger } from "./01-logger";

const loggerConsole = FactoryLogger.createLogger("console");
const loggerFile = FactoryLogger.createLogger("file");

loggerConsole.log('este es mensaje de consola')
loggerFile.log("este es mensaje de file");

Logger.instance.getlog();

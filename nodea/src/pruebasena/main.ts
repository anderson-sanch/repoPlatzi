import { Logger } from "./logger";
import { factoryLogger } from "./factory";

const loggerFile = factoryLogger.createLogger("file");

loggerFile.log("este es un mensaje guardado en archivo");

const logs = Logger.instance;

console.log("Historial en memoria:");
console.log(logs.getLogs());
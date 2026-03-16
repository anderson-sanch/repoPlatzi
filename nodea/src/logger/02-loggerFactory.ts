import {Logger} from './01-logger'
import * as path from 'path';
import * as fs from 'fs';

const loggerInstace = Logger.instance;


class FileLogger {

  private filePath: string;

  constructor(public logger: Logger) {
    this.filePath = path.join(__dirname, "log/logs.txt");

    const logDir = path.dirname(this.filePath);
    if(!fs.existsSync(logDir)){
      fs.mkdirSync(logDir);
    }
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${message}`;
    this.logger.log(message);

    fs.appendFileSync(this.filePath, logMessage + "\n")

    console.log("Guardado en archivo");
    
  }
}

export class FactoryLogger {
  static createLogger(type:string){
    if(type === 'file'){
      return new FileLogger(loggerInstace);
    }else{
      throw new Error('Tipo de logger no valido')
    }
  }
}

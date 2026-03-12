import {Logger} from './01-logger'

const loggerInstace = Logger.instance;

class ConsoleLogger {
  constructor(public logger: Logger) {
    this.logger = loggerInstace
  }

  log(message:string){
    console.log(`Usando consolelogger`);
    this.logger.log(message)
    console.log(`Usando consolelogger : ${message}`);
  }
}

class FileLogger {
  constructor(public logger: Logger) {
    this.logger = loggerInstace;
  }

  log(message: string) {
    console.log(`Usando FileLogger`);
    this.logger.log(message);
    console.log(`Usando FileLogger : ${message}`);
  }
}

export class FactoryLogger {
  static createLogger(type:string){
    if(type === 'console'){
      return new ConsoleLogger(loggerInstace);
    }else if(type === 'file'){
      return new FileLogger(loggerInstace);
    }else{
      throw new Error('Tipo de logger no valido')
    }
  }
}

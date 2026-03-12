
import { time } from 'console';
import { Logger } from './logger'
import * as fs from 'fs';
import * as path from 'path';
const loggerInstance = Logger.instance;

export class LoggeFile {
    private logPath:string;

    constructor(public logger: Logger = loggerInstance){
        this.logPath = path.join(__dirname,'logsmessage','logs.txt');

        const dir = path.dirname(this.logPath);
        
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir, {recursive: true})
        }
    }

    log(mensaje:string){
        console.log('usando file logger');
        const timeStamp = new Date().toISOString();
        const entry = `${timeStamp}: ${mensaje}\n`

        fs.appendFile(this.logPath, entry, (err) => {
            if(err){
                console.log('Error al escribir log:' + err);
                
            }
        })

        this.logger.log(mensaje)
        
    }
}

export class factoryLogger {
    static createLogger(type: string){
        if(type === 'file'){
            return new LoggeFile();
        }else{
            throw new Error('Tipo de logger no valido')
        }
    }
}
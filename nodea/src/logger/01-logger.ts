export class Logger {
  static #instance: Logger;
  private logs: string[] = [];
  private constructor() {}

  public static get instance(): Logger {
    if (!Logger.#instance) {
      Logger.#instance = new Logger();
    }
    return Logger.#instance;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    this.logs.push(`${timestamp}: ${message}`);
    console.log(`${timestamp}: ${message}`);
  }
  
  getlog() {
    return this.logs;
  }
}





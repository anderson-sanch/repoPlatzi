export class Logger {
    static #instance: Logger;

    private logs: string[];

    private constructor() {
        this.logs = [];
    }

    public static get instance(): Logger {
        if (!Logger.#instance) {
            Logger.#instance = new Logger();
        }
        return Logger.#instance;
    }

    log(message: string) {
        const timestamp = new Date().toISOString();
        const entry = `${timestamp}: ${message}`;

        this.logs.push(entry);
        console.log(entry);
    }

    getLogs(): string[] {
        return this.logs;
    }
}
import { EventEmitter } from "node:events";

class UserNotifer extends EventEmitter{
}

export type User = {
    id:string | number,
    email: string,
    name: string
}

export const notifer = new UserNotifer();
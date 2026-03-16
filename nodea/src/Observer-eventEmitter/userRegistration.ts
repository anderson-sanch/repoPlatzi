import { notifer } from "./notifer";
import type { User } from "./notifer";

export function registerUser(user: User): User {
    console.log("Registrando user...");

    notifer.emit("userRegistered", user);

    return user;
}

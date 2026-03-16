import { notifer } from "../notifer";
import type { User } from "../notifer";

export function logStats(user: User): void {
    console.log("Logging stats...", user);
}

notifer.on("userRegistered", logStats);

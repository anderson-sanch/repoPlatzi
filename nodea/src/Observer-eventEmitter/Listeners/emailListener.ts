import { notifer } from "../notifer";
import type { User } from "../notifer";

export function sendEmail(user: User): void {
    console.log(`Sending email to ${user.email}`);
}

notifer.on("userRegistered", sendEmail);

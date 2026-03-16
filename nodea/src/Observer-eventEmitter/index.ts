import "./Listeners/emailListener";
import "./Listeners/statsListener";
import { registerUser } from "./userRegistration";

const user = { id: 1, email: "anderson@correo.com", name: "anderson" };
const user2 = { id: 2, email: "alejandro@correo.com", name: "alejandro" };

registerUser(user);
registerUser(user2);

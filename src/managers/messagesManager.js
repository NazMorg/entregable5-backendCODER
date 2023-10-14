import { messagesModel } from "../db/models/messages.model.js";
import BaseManager from "./baseManager.js";

class MessagesManager extends BaseManager {
    constructor() {
        super(messagesModel);
    }
}

export const messagesManager = new MessagesManager();
import { Schema, model } from "mongoose";

const messagesSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true,
    },
    messages: {
        type: [{ body: String, date: Date }],
        required: true,
    }
});

export const messagesModel = model('Messages', messagesSchema);
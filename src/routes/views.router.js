import { Router } from "express";
import { messagesManager } from "../managers/messagesManager.js";

const router = Router();

router.get('/chat', async (req, res) => {
    const messages = await messagesManager.findAll();
    res.render("chat", { messages });
})

export default router;
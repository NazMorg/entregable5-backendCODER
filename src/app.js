import express from 'express';
import { __dirname } from './utils.js';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import cartsRouter from './routes/carts.router.js';
import productsRouter from './routes/products.router.js';
import { messagesManager } from './managers/messagesManager.js';
import './db/configDB.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

//routes
app.use("/", viewsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/products", productsRouter);


const httpServer = app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}...`);
})

const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);

    socket.on("createMessage", async (msg) => {
        const newMessage = await messagesManager.createOne(msg);
        socketServer.emit("sendMessage", newMessage);
    })

    socket.on("showMessages", async () => {
        const messagesList = await messagesManager.findAll();
        socketServer.emit("loadedMessages", messagesList);
    })
})


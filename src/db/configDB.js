import moongose from 'mongoose';
const URI = "mongodb+srv://NazMorg:v5JIispkP7espCWJ@entregable5coder.it6caz1.mongodb.net/entregable5CODER?retryWrites=true&w=majority&appName=AtlasApp"

moongose.connect(URI)
    .then(() => console.log("Conectado a la DataBase"))
    .catch((error) => console.log(error));
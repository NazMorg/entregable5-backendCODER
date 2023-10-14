const socketClient = io();
const form = document.getElementById("chatform");
const inputUser = document.getElementById("user");
const inputMsg = document.getElementById("message");
const chatBox = document.getElementById("chatbox");


form.onsubmit = (e) => {
    e.preventDefault();
    const userMsg = {
        user: inputUser.value,
        message: inputMsg.value,
    };
    console.log(userMsg)
    socketClient.emit("createMessage", userMsg);
}

socketClient.on("sendMessage", () => {
    socketClient.emit("showMessages");
});

socketClient.on("loadedMessages", (messages) => {
    const chatlog = messages.map((objMsg) => `<p>${objMsg.user}: ${objMsg.message}</p>`).join("  ");
    chatBox.innerHTML = chatlog;
})

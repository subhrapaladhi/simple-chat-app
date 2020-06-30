// make connection
let socket = io.connect("http://localhost:3000");

// query DOM
let message = document.getElementById('message')
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');

// emit events

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

// listen for events
socket.on("chat", (data) => {
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
})
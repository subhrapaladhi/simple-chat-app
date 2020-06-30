// make connection
let socket = io.connect("http://localhost:3000");

// query DOM
let message = document.getElementById('message')
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let feedback = document.getElementById('feedback');

// listen for typing event

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
})

// emit messages
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

// listen for messages
socket.on("chat", (data) => {
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
})

socket.on("typing", (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
})
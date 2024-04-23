const express = require('express')
const http = require('http')

const app = express()
var server = http.createServer(app);

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})
const io = require("socket.io")(server); 

io.on("connection", function (socket) {
    console.log(socket.id);

    socket.on("message", function(message) {
        socket.broadcast.emit("message", message);
    })
});

server.listen(3000, () => {
    console.log("server started");
})


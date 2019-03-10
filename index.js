// Here is How we Configure the Express.Js
var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io').listen(server);

var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


server.listen(process.env.PORT || 3000, () => console.log('Server are now Listening...'));


// Now We Create the Routes
app.get('/', (req, res) => {
    res.render('Chat');
});


// Web Socket Configurations
io.sockets.on('connection', (socket) => {
    socket.on('chat-message', (message) => {
        io.sockets.emit('chat-message', message);
    });
});
/* 
let socketIO = require("socket.io")



class ChatService {
    constructor(server) {
        if (server) {
            this.server = server
            this.io = socketIO(this.server);
        }
        this.opts = { port: 3000 }
    }


    start(cb) {
        this.server.listen(this.opts.port, () => {
            console.log("Up and running...")
            console.log(`Server listening at http://localhost:${this.opts.port}`)
            this.io.on('connection', socket => {
                cb(socket)
            })
        });
    }

    onJoin(socket) {
        console.log('new connection made.');
        socket.on('join', (data) => {
            socket.join(data.room);
            console.log(data.user + 'joined the room : ' + data.room);
            socket.broadcast.to(data.room).emit('new user joined', { user: data.user, message: 'has joined this room.' });
        });
    }


    onLeave(socket) {
        socket.on('leave', (data) => {
            console.log(data.user + 'left the room : ' + data.room);
            socket.broadcast.to(data.room).emit('left room', { user: data.user, message: 'has left this room.' });
            socket.leave(data.room);
        });
    }


    onMesage(socket) {
        socket.on('message', function (data) {
            this.io.in(data.room).emit('new message', { user: data.user, message: data.message });
        })
    }

}


export default ChatService;





 */
"use strict";
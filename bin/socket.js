var socket = require('socket.io');
var www = require('./www');
var users = require('../others/users');
var io = socket(www);
var tomb = [];
console.log('server is running...');
io.on('connection', function(socket){
    var person ={
      nickname:users.username,
      roomname:users.joinroom
    };
    socket.nickname=users.username;
    socket.roomname=users.joinroom;
    socket.join(users.joinroom);
    users.users[socket.nickname]=socket;
    tomb.push(person);



  //console.log(tomb);

    console.log('user aded name :'+ users.username);
    console.log(users.rooms);
    io.to(socket.roomname).emit('online',users.fuggveny(socket.roomname,tomb));
    socket.emit('name',socket.nickname);
    users.username=null;
    users.joinroom=null;
    console.log('a user connected');


    socket.on('disconnect',function(){
        console.log("disconnectelt from "+socket.roomname);
        delete users.users[socket.nickname];
        var i ;
        for(var y=0;y<tomb.length;y++){
            if(tomb[y].nickname==socket.nickname){
                i=y;
            }
        }
        if(i != -1) {
            tomb.splice(i, 1);
        }
        io.to(socket.roomname).emit('online',users.fuggveny(socket.roomname,tomb));
        console.log('user is disconnect');
    });



    socket.on('uzenet',function(msg){
        if(msg.substr(0,3)==='/w '){
            msg=msg.substr(3);
            var ind = msg.indexOf(' ');
            var name = msg.substring(0,ind);

            var uzenet = msg.substring(ind+1);

            users.users[name].emit('wisp',{msg:uzenet,user:socket.nickname});
            socket.emit('message',{msg:uzenet,user:socket.nickname});
        }
        else{
            //io.emit('message',{msg:msg,user:socket.nickname});
                io.to(socket.roomname).emit('message',{msg:msg,user:socket.nickname});
        }

    });

});



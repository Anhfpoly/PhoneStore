var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongodb = require('mongodb');
http.listen(3000);
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/asm';

MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Kết nối server bị lỗi ', err)
    } else {
        console.log('Kết nối server thành công ', url);
        collection = db.collection('users');
    }
});
io.on('connection', function (socket) {
    console.log('Kết nối với client ID: ', socket.id);
    socket.on('login', function (user, pass) {
        console.log("Evnetlogin: " + user + " pass: " + pass);
        var cursor = collection.find({ user: user });
        cursor.each(function (err, doc) {
            if (err) {
                console.log(err);
                socket.emit('login', false);
            } else {
                if (doc != null) {
                    if (doc.pass == pass) {
                        console.log("Đăng nhập thành công!");
                        socket.emit('login', true);
                    } else {
                        socket.emit('login', false);
                        console.log("Đăng nhập thất bại!");
                    }
                }
            }
        });
    });

    //socket.on('register', function)





});

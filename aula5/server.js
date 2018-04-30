var net = require('net');
var connections = [];

var broadcast = function(messege, origin){
	connections.forEach(function(connection){
		if(connection === origin) return;
		connection.write(messege)
	});
};

net.createServer(function(connection){
	connections.push(connection);
	connection.write('Hello, I am the server!');
	connection.on('data', function(messege){
		broadcast(messege, connection);
	});
}).listen(3000);
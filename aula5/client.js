var net = require('net');

var client = net.connect(3000);

client.on('connect', function(){
	client.write('Hello, I am the client!');
});

client.on('data', function(messege){
	console.log(messege.toString());
});

process.stdin.on('readable', function(){
	var messege = process.stdin.read();
	if(!messege) return;
	messege = messege.toString().replace(/\n/, '');
	client.write(messege);
});
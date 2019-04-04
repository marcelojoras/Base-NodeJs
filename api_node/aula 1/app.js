const express = require('express');
const app = express();

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3000);

module.exports = app;

/*app.post('/', (req, res) => {
	return res.send({messege: 'Tudo ok com o método POST!'});
});

app.get('/', (req, res) => {
	let obj = req.query; 
	return res.send({messege: 'Tudo ok com o método GET! Você enviou o nome de '+obj.nome+' com a idade de '+obj.idade+' anos!'});
});*/
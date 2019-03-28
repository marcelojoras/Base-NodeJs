const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; 
const app = express();

const uri = "mongodb+srv://marcelojoras:16202327@crud-node-802lf.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, (err, client) => {
	if(err) return console.log(err);
	db = client.db('crud-node');
});

app.listen(3000, () => {
	console.log('server running on port 3000');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index.ejs')
});

app.post('/show', (req, res) => {
	db.collection('data').save(req.body, (err, result) => {
		if(err) return console.log(err);

		console.log('salvo no banco');
		res.redirect('/'); 
	})
});
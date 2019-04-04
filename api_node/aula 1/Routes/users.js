const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	return res.send({messege: 'Tudo ok com o método GET da rota de Usuários!'});
});

router.post('/', (req, res) => {
	return res.send({messege: 'Tudo ok com o método POST da rota de Usuários!'});
});

router.post('/create', (req, res) => {
	return res.send({messege: 'Seu usuário foi criado!'});
});

module.exports = router;
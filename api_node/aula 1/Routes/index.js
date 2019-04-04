const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	return res.send({messege: 'Tudo ok com o método GET da Raiz!'});
});

router.post('/', (req, res) => {
	return res.send({messege: 'Tudo ok com o método POST da Raiz!'});
});

module.exports = router;
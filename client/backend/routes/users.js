const express = require('express');
const router = express.Router();

router.get('/signin', (req, res) => {
	res.send('Ingresando a la app');
	console.log('singing in');
});

router.get('signup', (req, res) => {
	res.send('Formulario de auto');
});

module.exports = router;

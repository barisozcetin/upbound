const express = require('express');

const router = express.Router();
const { getCards } = require('../../utils/_data');

// @route  GET api/cars/test
// @desc   Tests cars route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'cards works' }));

router.get('/', (req, res) => {
	getCards.then((cars) => res.json(cars)).catch((err) => console.log(err));
});

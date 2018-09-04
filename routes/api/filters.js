const express = require('express');

const router = express.Router();
const { getFilters } = require('../../utils/_data');

// @route  GET api/campaigns/test
// @desc   Tests campaigns route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'campaigns works' }));

router.get('/', (req, res) => {
	getFilters().then((filters) => res.json(filters)).catch((err) => console.log(err));
});

module.exports = router;

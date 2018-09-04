const express = require('express');

const router = express.Router();
const { getCampaigns } = require('../../utils/_data');

// @route  GET api/campaigns/test
// @desc   Tests campaigns route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'campaigns works' }));

router.get('/', (req, res) => {
	getCampaigns().then((campaigns) => res.json(campaigns)).catch((err) => console.log(err));
});

module.exports = router;

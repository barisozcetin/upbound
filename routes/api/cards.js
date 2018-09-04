const express = require('express');

const router = express.Router();
const { getCards, updateCards } = require('../../utils/_data');

// @route  GET api/cards/test
// @desc   Tests cars route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'cards works' }));

router.get('/', (req, res) => {
	getCards()
		.then((cards) => {
			res.json(cards.sort((a, b) => a.cardTitle - b.cardTitle));
		})
		.catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
	getCards().then((cards) => cards.filter((card) => card.cardTitle === id)[0]).then((card) => {
		res.json(card);
	});
});

// In data, all cards have the same id, using their title as their id
router.post('/:id', (req, res) => {
	const id = req.params.id;
	const { negative, pause } = req.body;
	const card = getCards().then((cards) => cards.filter((card) => card.cardTitle == id)[0]).then((card) => {
		const options = {
			negative,
			pause
		};
		const newCard = moveState(card, options);
		updateCards(newCard);
		res.json({ card });
	});
});

module.exports = router;

// We have main workflow which goes as saved, pending, active, expired.
// Also there are negative and pause workflows. If there are matching params, we will use them

// if current status is in main workflow and there is no additional option, go to next step(or expired)

// if current status is either pending or active and negative option is true, then do negative state change

// if current status is paused or active and pause param is true, then switch between paused and active

// if no match, return old card, else return updated card

function moveState(card, { negative = false, pause = false }) {
	const mainStates = [ 'saved', 'pending', 'active', 'expired' ];
	const negativeStates = { pending: 'declined', active: 'terminated' };
	const pauseStates = [ 'paused', 'active' ];
	const currentState = card.currentWorkflow;
	let newState = currentState;
	if (negative.toString() !== 'true' && pause.toString() !== 'true' && mainStates.includes(currentState)) {
		// console.log('postitive');
		const index = mainStates.indexOf(currentState);
		newState = mainStates[index + 1] || 'expired';
	} else if (negative.toString === 'true' && negativeStates[currentState]) {
		// console.log('negative');
		newState = negativeStates[currentState];
	} else if (pause.toString() === 'true' && pauseStates.includes(currentState)) {
		// console.log('pause');
		newState = pauseStates.indexOf(currentState) === 0 ? pauseStates[1] : pauseStates[0];
	}
	// console.log(newState);
	if (currentState === newState) return card;

	card.currentWorkflow = newState;
	return card;
}

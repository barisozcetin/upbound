const express = require('express');
const bodyParser = require('body-parser');

const campaigns = require('./routes/api/campaigns');
const cards = require('./routes/api/cards');
const filters = require('./routes/api/filters');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use('/api/campaigns', campaigns);
app.use('/api/cards', cards);
app.use('/api/filters', filters);

app.listen(port, () => console.log(`server running on port ${port}`));

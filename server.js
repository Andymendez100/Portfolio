// Setting up server
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4040;

const app = express();

require('dotenv').config();

app.use(express.static(`${__dirname}/public`));
// Configuring middleware for helping to read data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

require('./routes/apiRoutes.js')(app);

app.listen(PORT, () => {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});

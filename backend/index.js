const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello Express app!')
})

app.listen(3001, () => {
	console.log('server started');
})
const express = require('express');

const app = express();

app.use(express.json());

// Se debería pasar a un .env
PORT = 3000;

// Se debería pasar, en caso de usarla, para un .env
PRIVAVE_API_KEY = 'api_key';

app.get('/api/health/liveness', (req, res) => {
  res.status(200).json({ uptime: process.uptime(), app: 'api-core' });
});

app.get('/api/health/readiness', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log('Listening');
});

module.exports = app;

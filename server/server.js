const express = require('express');
const app = express();
const log = console.log;

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => log(`SERVER STARTED at https://http://localhost:${PORT} <====`))
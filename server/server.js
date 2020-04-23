const express = require('express');
const app = express();
const path = require('path');

const log = console.log;

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => log(`SERVER STARTED at https://http://localhost:${PORT} <====`))
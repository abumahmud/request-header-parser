const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
    const ipaddress = req.ip;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    res.json({
    ipaddress,
    language,
    software
  });
});

app.listen(PORT, ()=>{
    console.log(`Your app is listening on port ${PORT}`);
})
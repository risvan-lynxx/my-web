const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/session', (req, res) => {
    res.sendFile(__dirname + '/session.html');
});

app.get('/deploy', (req, res) => {
    res.sendFile(__dirname + '/deploy.html');
});

app.get('/support', (req, res) => {
    res.sendFile(__dirname + '/support.html');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

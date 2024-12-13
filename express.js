const express = require('express');
const app = express();

// Serve static HTML files from the public directory
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

// Additional routes for buttons
app.get('/qr', (req, res) => {
    res.send('izumi.maskser.me/qr');
});

app.get('/pair', (req, res) => {
    res.send('izumi.maskser.me/pair');
});

app.get('/koyeb', (req, res) => {
    res.send('koyeb.com');
});

app.get('/render', (req, res) => {
    res.send('render.com');
});

app.get('/group', (req, res) => {
    res.send('https://chat.whatsapp.com/KHvcGD7aEUo8gPocJsYXZe');
});

app.get('/channel', (req, res) => {
    res.send('https://whatsapp.com/channel/0029Vaf2tKvGZNCmuSg8ma2O');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

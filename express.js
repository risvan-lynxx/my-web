const express = require('express');
const app = express();

// Serve static HTML files from the public directory
app.use(express.static('public'));

// Route handling
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
    res.send('QR Page');
});

app.get('/pair', (req, res) => {
    res.send('Pair Page');
});

app.get('/koyeb', (req, res) => {
    res.send('Koyeb Page');
});

app.get('/render', (req, res) => {
    res.send('Render Page');
});

app.get('/group', (req, res) => {
    res.send('Group Page');
});

app.get('/channel', (req, res) => {
    res.send('Channel Page');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

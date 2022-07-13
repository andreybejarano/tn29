const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor funcionando en http://localhost:' + port);
});
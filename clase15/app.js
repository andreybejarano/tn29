const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const pathPublic = path.resolve(__dirname, './public');
app.use(express.static(pathPublic));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/', (req, res) => {
    res.redirect('/');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.listen(3000, ()=>{
    console.log('Servidor funcionando en: http://localhost:3000');
});

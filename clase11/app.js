const express = require('express');
const path = require('path');

const app = express();

const pathPublic = path.resolve(__dirname, './public');
app.use(express.static(pathPublic));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.listen(3000, ()=>{
    console.log('Servidor funcionando en: http://localhost:3000');
});

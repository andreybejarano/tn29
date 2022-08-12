const express = require('express');
const path = require('path');
const expressSession = require('express-session');

const mainRouter = require('./routes/main');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(expressSession({ secret: 'SECRET' }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', mainRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port}`);
});
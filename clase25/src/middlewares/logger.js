const fs = require('fs');
const path = require('path');

const loggerMiddleware = (req, res, next) => {
    const logFilePath = path.resolve(__dirname, '../logs/userLogs.txt');
    const message = `El usuario ingresó a la ruta: ${req.path}\n`;
    fs.appendFileSync(logFilePath, message);
    next();
};

module.exports = loggerMiddleware;
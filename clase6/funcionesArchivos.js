// Requiero la libreria fs
const fs = require('fs');

module.exports = {
    listar: () => {
        const fileTareas = fs.readFileSync('tareas.json', 'utf-8');
        return JSON.parse(fileTareas);
    }
}
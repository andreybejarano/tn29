// Requiero la libreria fs
const fs = require('fs');

module.exports = {
    file: 'tareas.json',
    leerArchivo: function() {
        const fileTareas = fs.readFileSync(this.file, 'utf-8');
        return JSON.parse(fileTareas);
    },
    escribirJSON: function(tareas) {
        const tarea = JSON.stringify(tareas, null, '    ');
        fs.writeFileSync(this.file, tarea);
    },
    guardarTarea: function(nuevaTarea) {
        let tareas = this.leerArchivo();
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas);
    }
};
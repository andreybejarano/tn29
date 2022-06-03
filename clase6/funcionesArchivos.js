// Requiero la libreria fs
const fs = require('fs');

module.exports = {
    file: 'tareas.json',
    leerArchivo: function() {
        const fileTareas = fs.readFileSync(this.file, 'utf-8');
        return JSON.parse(fileTareas);
    },
    // Micro desafío 2-a
    //Dentro de nuestro archivo funcionesDeTareas.js(en nuestro caso funcionesArchivos.js), vamos a crear una función llamada escribirJSON. 
    escribirJSON: function(tareas) {
        const tarea = JSON.stringify(tareas, null, '    ');
        fs.writeFileSync(this.file, tarea);
    },
    // Micro desafío 2-b - Escribir la tarea en el archivo JSON
    guardarTarea: function(nuevaTarea) {
        let tareas = this.leerArchivo();
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas);
    },
    // Micro desafío 3, aplicar filter para traer solo las tareas pendientes
    filtrarPorEstado: function (estado) {
        const tareas = this.leerArchivo();
        return tareas.filter(tarea => tarea.estado === estado);
    }
};
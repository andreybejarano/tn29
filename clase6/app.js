const funcTareas = require('./funcionesArchivos');

const accion = process.argv[2];

switch (accion) {
    case 'listar':
        const tareas = funcTareas.leerArchivo();
        console.log('Listado de tareas');
        console.log('-----------------');
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.titulo} - ${tarea.estado}`);
        });
        break;
    case 'crear':
        console.log();    
        console.log('Nueva tarea creada');
        console.log('------------------');
        const titulo = process.argv[3];
        const tarea = {
            titulo,
            estado: "pendiente"
        };
        funcTareas.guardarTarea(tarea);
        console.log(`${tarea.titulo} -> ${tarea.estado}`);
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        console.log('---------------------------------------');
        break;
    default:
        console.log('No entiendo qué quieres hacer.');
        console.log('------------------------------');
        break;
}
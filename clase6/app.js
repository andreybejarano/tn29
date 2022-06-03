const funcTareas = require('./funcionesArchivos');

const accion = process.argv[2];

switch (accion) {
    case 'listar':
        const tareas = funcTareas.listar();
        console.log('Listado de tareas');
        console.log('-----------------');
        for (let index = 0; index < tareas.length; index++) {
            // console.log((index + 1) + '. ' + tareas[index].titulo + ' - ' + tareas[index].estado);
            console.log(`${index + 1}. ${tareas[index].titulo} - ${tareas[index].estado}`);
        }
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
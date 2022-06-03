const funcTareas = require('./funcionesArchivos');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
const accion = process.argv[2];

switch (accion) {
    case 'listar':
        const tareas = funcTareas.leerArchivo();
        console.log('Listado de tareas');
        console.log('-----------------');
        //Micro desafío 1
        //Modificar la funcionalidad de listar tareas. Deberemos utilizar el método forEach.
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.titulo} - ${tarea.estado}`);
        });
        break;
    // Micro desafío 2 - c
    // -------------------
    // Escribir el caso de crear tarea
    // Tener en cuenta que va a llegar el nombre de la tarea como segundo argumento
    // Tener en cuenta que la tarea se crea en esto "pendiente"
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
    // Micro desafío 3
    case 'filtrar':
        const estado = process.argv[3];
        console.log('Tareas ' + estado);
        console.log('------------------');
        const filtradas = funcTareas.filtrarPorEstado(estado);
        filtradas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.titulo} - ${tarea.estado}`);
        });
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
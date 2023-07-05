const yargs = require('yargs');
const funcionCreate = require('./funciones/create.js')
const funcionRead = require('./funciones/read.js')
const funcionUpdate = require('./funciones/update.js')
const funcionDelete = require('./funciones/delete.js')

// Configuraciones:

const configDelete = {
    id: {
        describe: "El código id o identificador de la tarea a eliminar.",
        alias: "i"
    }
}

const configUpdate = {
    titulo: {
        describe: "Nuevo nombre de la tarea",
        alias: "t",
    },
    contenido: {
        describe: "Nueva descripción de la tarea.",
        alias: "c"
    },
    id: {
        describe: "El código id o identificador de la tarea por actualizar o modificar.",
        alias: "i"
    }
}

const configCreate = {
    titulo: {
        describe: "El nombre de la tarea.",
        alias: "t",
        demandOption: true
    },
    contenido: {
        describe: "Descripción de la tarea.",
        alias: "c",
        demandOption: true
    }
}


// Declaración de argumentos

const args = yargs
.command('create', 'Crear una nueva tarea.', configCreate, (argv) => funcionCreate(argv))
.command('read', 'Mostrar todas las tareas', {}, (argv) => funcionRead())
.command('update', 'Actualizar o modificar una tarea', configUpdate, (argv) => funcionUpdate(argv))
.command('delete', 'Eliminar una tarea', configDelete, (argv) => funcionDelete(argv))
.help()
.argv
const arrayTareas = require('./leerTareas.js')

const funcionRead = async () => {
    try {
        
        let contador = 0;
        for (const tareas of await arrayTareas()) {
            const { titulo, contenido, id } = tareas;
            contador++
            console.log("");
            console.log(`Tarea Número: ${contador}`);
            console.log(`Título: ${titulo}`);
            console.log(`Contenido: ${contenido}`);
            console.log(`id: ${id}`);
            console.log("");
        }
    } catch (error) {
        console.log('No es posible leer el archivo tareas.txt');
    }
}

module.exports = funcionRead
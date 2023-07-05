const fs = require('fs/promises');

const arrayTareas = async () => {
    try {
        let tareas = await fs.readFile('tareas.txt')
        let lista = JSON.parse(tareas)
        return lista;
    } catch (error) {
        console.log('Hay problemas para acceder al archivo tareas.txt');
        console.log(error);
    }
} 

module.exports = arrayTareas
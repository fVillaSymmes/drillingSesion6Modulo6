const arrayTareas = require('./leerTareas.js')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');


const funcionCreate = async ({titulo, contenido}) => {
    try {
        const id = uuidv4().slice(0,8);
        const nuevaTarea = { titulo: titulo, contenido: contenido, id: id };

        let tareas = await arrayTareas()
    
        tareas.push(nuevaTarea);

    await fs.writeFile('tareas.txt', JSON.stringify(tareas, null, 2))
    console.log("La nueva tarea ha sido agregada satisfactoriamente a tareas.txt");
    } catch (error) {
        console.log("No ha sido posible acceder agregar la tarea a tareas.txt");
        console.log(error);
    }
}

module.exports = funcionCreate
const arrayTareas = require('./leerTareas.js')
const fs = require('fs/promises');
const _ = require('lodash');

const funcionDelete = async ({id}) => {
    try {
        let tareas = await arrayTareas()
        const tareaPorEliminar = _.remove(tareas, function (tarea) {return tarea.id == id})
        if(tareaPorEliminar.length) {
            await fs.writeFile('tareas.txt', JSON.stringify(tareas, null, 2));
            console.log('La tarea seleccionada ha sido eliminada satisfactoriamente');
        } else {
            console.log('El id indicado no corresponde a ninguna tarea');
        }
    } catch (error) {
        console.log('No ha sido posible eliminar la tarea seleccionada.');
        console.log(error);
    }
}

module.exports = funcionDelete
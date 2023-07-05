const arrayTareas = require('./leerTareas.js')
const fs = require('fs/promises');


const funcionUpdate = async ({titulo, contenido, id}) => {
    try {
        const tareas = await arrayTareas()
        const tareaPorBuscar = tareas.find(tarea => tarea.id === id);
        if (tareaPorBuscar == undefined) {
            console.log('El id indicado no corresponde a ninguna tarea.');
        } else {
            const tituloNuevo = titulo ? titulo : tareaPorBuscar.titulo;
            const contenidoNuevo = contenido ? contenido : tareaPorBuscar.contenido;
        
            tareaPorBuscar.titulo = tituloNuevo;
            tareaPorBuscar.contenido = contenidoNuevo;
        
            await fs.writeFile('tareas.txt', JSON.stringify(tareas, null, 2));
            console.log('La tarea indicada ha sido actualizada satisfactoriamente.');
        }
    } catch (error) {
        console.log('No ha sido posible actualizar la tarea seleccionada');
        console.log(error);
    }
}

module.exports = funcionUpdate
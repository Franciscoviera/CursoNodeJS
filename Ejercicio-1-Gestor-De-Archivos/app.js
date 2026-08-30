//Actua como main, ejecuta funciones definidas en gestorNotas
import { agregarNota, borrarNotas, obtenerNotas, estaVacio } from "./gestornotas.js";

try {
    await agregarNota("Nueva Nota")
} catch (error) {
    console.log("Error al agregar:", error.message)
}

try {
    const notas = await obtenerNotas()
    console.log(notas)
} catch (error) {
    console.log("Error al obtener:", error.message)
}

try {
    await borrarNotas()
} catch (error) {
    console.log("Error al borrar:", error.message)
}
// 1. Crea un módulo encargado de gestionar el archivo notas.txt.
// 2. Crea una función agregarNota(texto) que agregue una nota al archivo.
// 3. Crea una función obtenerNotas() que lea todas las notas.
// 4. Crea una función borrarNotas() que deje el archivo vacío.
// 5. Todas las operaciones deben ser asíncronas.
// 6. Maneja correctamente los errores.
// 7. Desde otro archivo, importa las funciones y pruébalas.

import fs from 'node:fs/promises'

export async function agregarNota(texto){
    console.log("Agregando Nota...")
    if(typeof texto !== "string"){
        throw new Error("Falta Texto a insertar en la Nota")
    }
    await fs.appendFile("notas.txt", `${texto}\n`);
    console.log("Nota Agregada Exitosamente")
}

export async function obtenerNotas() {
    console.log("Obteniendo Notas...")
    return await fs.readFile("./notas.txt","utf-8")
}

export async function borrarNotas() {
    console.log("Borrando...")
    await fs.writeFile("notas.txt","")
}

export function estaVacio(notas){
    return notas === ""
}
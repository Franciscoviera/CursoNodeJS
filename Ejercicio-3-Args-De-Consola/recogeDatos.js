
// EJERCICIO 3 — Argumentos de consola
// Crea un programa que reciba información mediante argumentos
// de la línea de comandos.
//
// Ejemplo:
// node app.js Fran 22 Backend
//
// El programa debe mostrar:
// Nombre: Fran
// Edad: 22
// Área: Backend
//
// Objetivo: practicar process.argv.

import process from "node:process"

export function obtenerDatosConsola(){

    console.log(`Nombre: ${ process.argv[2] }`)
    console.log(`Edad: ${ process.argv[3] }`) //Number(process.argv[3]) pera que de 22 y no "22"
    console.log(`Area: ${ process.argv[4] }`)
}
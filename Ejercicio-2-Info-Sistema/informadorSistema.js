// 1. Muestra la versión de Node.js que estás utilizando.
// 2. Muestra el sistema operativo en el que se está ejecutando Node.
// 3. Muestra la arquitectura del procesador.
// 4. Muestra el directorio de trabajo actual.
// 5. Muestra la ruta absoluta del archivo app.js.
// 6. Muestra únicamente el nombre del archivo app.js.
// 7. Muestra únicamente la extensión del archivo.
// 8. Muestra los argumentos recibidos mediante process.argv.

import path from "node:path"
import process from "node:process"

function obtenerVersion(){
    return process.version
}

function obtenerSO(){
    return process.platform
}

function obtenerArq(){
    return process.arch
}

function obtenerDirActual(){
    return process.cwd()
}

function obtenerRutaAbsolutaApp(){
    return process.argv[1]; 
}

function nombreApp(){
    return path.basename(process.argv[1])
}

function extensionApp(){
    return path.extname(process.argv[1])
}

function argsProcess(){
    return process.argv
}

export function resumenSistema(){
    console.group("Resumen:\n")
    console.log("Version de Node: ", obtenerVersion(), "\n")
    console.log("Sistema Operativo: ", obtenerSO(), "\n")
    console.log("Arquitectura: ", obtenerArq(), "\n")
    console.log("Direccion Actual: ", obtenerDirActual(), "\n")
    console.log("Direccion Absoluta App: ", obtenerRutaAbsolutaApp(), "\n")
    console.log("Nombre: ", nombreApp(), "\n")
    console.log("Extension: ", extensionApp(), "\n")
    console.log("Argumentos: ", argsProcess()) 
    console.groupEnd()
}
